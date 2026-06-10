# Playwright POM Framework

## Status

[![Playwright Tests](https://github.com/thebedigupta/playwright-pom-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/thebedigupta/playwright-pom-framework/actions/workflows/playwright.yml) [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org) [![Playwright](https://img.shields.io/badge/Playwright-latest-green)](https://playwright.dev) [![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

A production-ready end-to-end test automation framework built with **Playwright** and **TypeScript**.

This project demonstrates practical SDET patterns such as the Page Object Model (POM), data-driven testing (DDT), custom fixtures, parallel cross-browser execution, and CI via GitHub Actions.

## Quick Links

- [Tech Stack](#tech-stack)
- [Framework Architecture](#framework-architecture)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Test Suite Overview](#test-suite-overview)
- [Design Patterns](#design-patterns)
- [CI/CD](#cicd)
- [Target Application](#target-application)
- [Author](#author)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev) | Browser automation and test runner |
| [TypeScript](https://www.typescriptlang.org) | Strict typing across the entire framework |
| [GitHub Actions](https://docs.github.com/actions) | CI/CD — runs on every push and pull request |
| [csv-parse](https://csv.js.org/parse) | CSV data file parsing for DDT |

---

## Framework Architecture

┌──────────────────────────────────────────────────────────┐
│                      TEST LAYER                          │
│   login.spec  shopping.spec  checkout.spec  ddt-*.spec   │
│   Pure test logic — no raw selectors, no setup code      │
└─────────────────────────┬────────────────────────────────┘
│ uses
┌─────────────────────────▼────────────────────────────────┐
│                    FIXTURE LAYER                         │
│              fixtures/customFixtures.ts                  │
│        loggedInPage │ cartPage │ checkoutPage            │
│   Handles authentication setup once — injected into tests │
└─────────────────────────┬────────────────────────────────┘
│ instantiates
┌─────────────────────────▼────────────────────────────────┐
│                 PAGE OBJECT LAYER                        │
│   BasePage → LoginPage → ProductsPage                     │
│            CartPage → CheckoutPage                        │
│   Each class: private locators + public action methods    │
└─────────────────────────┬────────────────────────────────┘
│ reads from
┌─────────────────────────▼────────────────────────────────┐
│                    DATA LAYER                            │
│   utils/testData.ts        — users, products, checkoutInfo │
│   utils/loginData.json     — DDT login credentials        │
│   utils/productsData.json  — DDT product datasets         │
│   data/negativeLoginData.csv — DDT negative test cases    │
└──────────────────────────────────────────────────────────┘

---

## Project Structure
The core project layout for the `playwright-pom` package:

```
playwright-pom/
├── pages/                # Page Object classes (BasePage, LoginPage, ...)
├── tests/                # Test specs (login.spec.ts, checkout.spec.ts, ...)
├── fixtures/             # customFixtures.ts (shared fixtures)
├── utils/                # test data and helpers
├── data/                 # external datasets (CSV/JSON)
├── playwright.config.ts  # Playwright config: projects, reporters
├── tsconfig.json         # TypeScript config
├── package.json
└── .github/workflows/    # CI workflows (playwright.yml)
```

---

## Setup

**Prerequisites:** Node.js 18+ and npm.

```bash
# Clone the repository
git clone https://github.com/thebedigupta/playwright-pom-framework.git
cd playwright-pom-framework

# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install
```

---

## Running Tests

Use the following commands to run the suite in different ways.

### Run all tests (3 browsers in parallel)
```bash
npx playwright test
```

### Run on a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a specific test file
```bash
npx playwright test tests/login.spec.ts
npx playwright test tests/checkout.spec.ts
```

### Run by tag
```bash
# Smoke suite only (fast, critical path)
npx playwright test --grep @smoke

# Regression suite only (full coverage)
npx playwright test --grep @regression
```

### Run DDT test suites
```bash
# All data-driven tests
npx playwright test tests/ddt-login.spec.ts tests/ddt-products.spec.ts tests/ddt-negative.spec.ts

# Login DDT only (5 credential combinations)
npx playwright test tests/ddt-login.spec.ts --project=chromium
```

### View HTML report
```bash
npx playwright show-report
```

### Run in headed mode (watch browser)
```bash
npx playwright test --headed --project=chromium
```

### Debug a specific test
```bash
npx playwright test tests/login.spec.ts --debug
```

---

## Test Suite Overview

| File | Tests | Tags | Technique |
|---|---|---|---|
| `login.spec.ts` | 3 | @smoke, @regression | Standard POM |
| `shopping.spec.ts` | 1 | @smoke | POM + multi-page flow |
| `checkout.spec.ts` | 1 | @smoke | Full E2E flow |
| `ddt-login.spec.ts` | 5 | — | DDT via for...of loop |
| `ddt-products.spec.ts` | 3 | — | DDT via JSON file |
| `ddt-negative.spec.ts` | 4 | — | DDT via CSV file |
| `fixture-demo.spec.ts` | 4 | @smoke, @regression | Custom fixtures |
| **Total** | **21** | | **3 browsers = 63 runs** |

---

## Design Patterns

### Page Object Model (POM)

Each page of the application is represented by one TypeScript class.
Locators are stored as `private readonly` properties, so test files never need to see a CSS selector or XPath expression directly.

```ts
// ✅ What tests look like with POM
await loginPage.goto();
await loginPage.login(users.standard.username, users.standard.password);
await loginPage.assertLoginSuccess();

// ❌ What tests look like without POM (maintenance nightmare)
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();
```

**Benefit:** When a selector changes, update one line in one page class and keep the tests untouched.

---

### Data Driven Testing (DDT)

Three DDT approaches are demonstrated across the test suite:

**Method 1 — Inline `for...of` loop** (`ddt-login.spec.ts`)
```ts
const loginCases = [
  { username: 'standard_user', password: 'secret_sauce', expectSuccess: true },
  { username: 'wrong_user',    password: 'secret_sauce', expectSuccess: false },
  // 3 more rows...
];

for (const { username, password, expectSuccess } of loginCases) {
  test(`login [${username}]`, async ({ page }) => { ... });
}
```

**Method 2 — External JSON file** (`ddt-products.spec.ts`)
```ts
import productsData from '../utils/productsData.json';

for (const { productName, description } of productsData) {
  test(`add to cart: ${description}`, async ({ page }) => { ... });
}
```

**Method 3 — CSV file** (`ddt-negative.spec.ts`)
```ts
const negativeCases = loadCSV('negativeLoginData.csv');

for (const { username, password, expectedError } of negativeCases) {
  test(`negative: "${expectedError}"`, async ({ page }) => { ... });
}
```

---

### Custom Fixtures

Authentication setup is defined once in `fixtures/customFixtures.ts` and injected into any test that needs it. That removes repeated login code from the test files.

```ts
// customFixtures.ts — defined once
loggedInPage: async ({ page }, use) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await use(new ProductsPage(page));  // hands ready page to test
},

// fixture-demo.spec.ts — used anywhere, no login code needed
test('add to cart', async ({ loggedInPage }) => {
  await loggedInPage.addProductToCart(products.backpack);
  await loggedInPage.assertCartCount(1);
});
```

---

## CI/CD

The framework runs automatically on every push and pull request through GitHub Actions.

**Pipeline steps:**
1. Checkout code
2. Set up Node.js
3. Install dependencies (`npm ci`)
4. Install Playwright browsers
5. Run full test suite (`npx playwright test`)
6. Upload HTML report as downloadable artifact

View pipeline runs:
[GitHub Actions](https://github.com/thebedigupta/playwright-pom-framework/actions)

---

## Target Application

All tests run against **[Saucedemo](https://www.saucedemo.com)**, a purpose-built e-commerce demo site for automation practice.

---

## Author

**Bedi Gupta**
BCA Final Year | GLA University
Targeting SDET and QA Automation roles — 2026

[GitHub](https://github.com/thebedigupta) · [LinkedIn](https://linkedin.com/in/thebedigupta)