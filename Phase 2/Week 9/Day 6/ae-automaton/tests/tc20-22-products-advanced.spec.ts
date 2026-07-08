import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { testUser, generateUniqueEmail } from "../utils/testData";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";

test("TC20: Search Product, add to cart, verify cart after login", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const email = generateUniqueEmail();

  await productPage.open();
  await productPage.searchProduct("Top");
  await productPage.verifySearchResultVisible();

  // Add first searched product to cart
  await page.waitForLoadState("networkidle");
  await productPage.hoverAndAddToCart(0);
  await productPage.continueShopping();

  // View cart before login
  await cartPage.open();
  await cartPage.verifyCartPageDisplayed();
  await cartPage.verifyProductCount(1);

  // Register and login

  await loginPage.open();
  await loginPage.fillSignUpNameAndEmail(testUser.name, email);
  await loginPage.fillAccountInformation(
    testUser.title,
    testUser.name,
    testUser.password,
    testUser.dob,
  );
  await loginPage.fillAddressInformation(
    testUser.firstName,
    testUser.lastName,
    testUser.company,
    testUser.address1,
    testUser.address2,
    testUser.country,
    testUser.state,
    testUser.city,
    testUser.zipcode,
    testUser.mobile,
  );
  await loginPage.verifyAccountCreated();

  // Return to cart - product should still be there
  await cartPage.open();
  await cartPage.verifyCartPageDisplayed();
  await cartPage.verifyProductCount(1);

  await loginPage.deleteAccount();
});

test.describe("TC21 - Add Product review", () => {
  const reviewDatasets = [
    {
      name: "Review One",
      email: "rev1@test.com",
      review: "EXcellent Quality Product",
    },
    {
      name: "Reviewer Two",
      email: "rev2@test.com",
      review: "Good value for money, satisfied with purchase.",
    },
    {
      name: "Reviewer Three",
      email: "rev3@test.com",
      review: "Average product, met basic expectations.",
    },
  ];

  for (let dataset of reviewDatasets) {
    test(`${dataset.name} `, async ({ page }) => {
      const { name, email, review } = dataset;
      const loginPage = new LoginPage(page);
      const productPage = new ProductPage(page);
      const detailPage = new ProductDetailsPage(page);
      const dummyEmail = generateUniqueEmail();

      await loginPage.open();
      await loginPage.fillSignUpNameAndEmail(testUser.name, dummyEmail);
      await loginPage.fillAccountInformation(
        testUser.title,
        testUser.name,
        testUser.password,
        testUser.dob,
      );
      await loginPage.fillAddressInformation(
        testUser.firstName,
        testUser.lastName,
        testUser.company,
        testUser.address1,
        testUser.address2,
        testUser.country,
        testUser.state,
        testUser.city,
        testUser.zipcode,
        testUser.mobile,
      );
      await loginPage.verifyAccountCreated();

      await productPage.open();
      await productPage.verifyAllProductsVisible();
      await productPage.clickViewProduct();

      await detailPage.fillreview(name, email, review);
    });
  }
});

// TC22 - Add to cart from Recommended Items

test("TC22: - Add to cart from Recommended Items", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const email = generateUniqueEmail();

  await loginPage.open();
  await loginPage.fillSignUpNameAndEmail(testUser.name, email);
  await loginPage.fillAccountInformation(
    testUser.title,
    testUser.name,
    testUser.password,
    testUser.dob,
  );
  await loginPage.fillAddressInformation(
    testUser.firstName,
    testUser.lastName,
    testUser.company,
    testUser.address1,
    testUser.address2,
    testUser.country,
    testUser.state,
    testUser.city,
    testUser.zipcode,
    testUser.mobile,
  );
  await loginPage.verifyAccountCreated();

  await homePage.open();

  //Scroll to recommended Items section at the bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(page.getByText(/recommended items/i)).toBeVisible({
    timeout: 10_000,
  });

  // Target the active slide inside the recommended items carousel
  const activeSlide = page.locator(".recommended_items .item.active");

  // Find the first Add to cart button specifically inside that visible slide
  const firstVisibleAddToCartBtn = activeSlide.locator(".add-to-cart").first();

  // Click it
  await firstVisibleAddToCartBtn.click();

  // Go to cart
  await cartPage.open();
  await cartPage.verifyCartPageDisplayed();
  await cartPage.verifyProductCount(1);
});
