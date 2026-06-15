import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

test("Login-Page print all violations before asserting", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const results = await new AxeBuilder({ page }).analyze();

  // Print what we have found
  if (results.violations.length > 0) {
    console.log("\n=== Accessibility Violations Found ===");
    results.violations.forEach((v) => {
      console.log(
        `It has ID: ${v.id} and impact ${v.impact} on the system which has description ${v.description}`,
      );
    });
  }

  // Saucedemo has known violations - supress them to make test useful
  const criticalVoilation = results.violations.filter(
    (v) => v.impact === "critical",
  );
  expect(criticalVoilation).toHaveLength(0); // assert zero CRITICAL violations only
});

test("Inventory page - scan after login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");
  await expect(page.locator(".inventory_list")).toBeVisible();

  // Scan the page after interaction - axe see whatever state the page is in
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();

  // Log Voilation for learning - don't tell on demo site issues

  console.log(`Violation Found :${results.violations.length}`);
  results.violations.forEach((v) => {
    console.log(`[${v.impact?.toUpperCase()}] ${v.id} ${v.description}`);
  });
  // Assert no critical violations (severity : critical breaks assistive tech)
  const critical = results.violations.filter((v) => {
    v.impact === "critical";
  });
  expect(critical).toHaveLength(0);
});