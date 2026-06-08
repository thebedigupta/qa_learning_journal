import { test, expect } from "@playwright/test";

test.describe("Screenshot and Tracing Practice", () => {
  test("take manual screenshot at each checkout step", async ({ page }) => {
    await page.goto("https://saucedemo.com/");

    //Screenshot 1 - login page

    await page.screenshot({
      path: "screenshots/01-login-page.png",
      fullPage: true,
    });

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    // Screenshot 2 - Inventory Page
    await page.screenshot({
      path: "screenshots/02-inventory-page.png",
      fullPage: true,
    });

    await page.getByRole("button", { name: "Add to cart" }).first().click();
    await page.locator(".shopping_cart_badge").click();

    //Screenshot -3 Checkout Page
    await page.screenshot({
      path: "screenshots/03-Checkout-page.png",
      fullPage: true,
    });

    await page.getByRole("button", { name: "Checkout" }).click();
    await page.getByPlaceholder("First Name").fill("Bedi");
    await page.getByPlaceholder("Last Name").fill("Gupta");
    await page.getByPlaceholder("Zip/Postal Code").fill("274001");
    await page.getByRole("button", { name: "Continue" }).click();

    // Order overview
    await page.screenshot({
      path: "screenshots/04-Order-overview.png",
      fullPage: true,
    });
    await page.getByRole("button", { name: "Finish" }).click();

    // Screenshot - Order Complete
    await page.screenshot({
      path: "screenshots/05-order-complete.png",
      fullPage: true,
    });

    await expect(
      page.getByRole("heading", { name: "Thank you for your order!" }),
    ).toBeVisible();
  });

  test("take element screenshot of product card", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    // First Product Card item
    await page.locator(".inventory_item").first().screenshot({
      path: "screenshots/01-first-product.png",
    });

    await expect(page.locator(".inventory_item").first()).toBeVisible();
  });

  test("snapshot test — login page visual regression", async ({ page }) => {
    await page.goto("https://www.saucedemo.com");

    // First run saves reference
    // Subsequent runs compare
    // The Modern SDET Standard for Visual Testing
    await expect(page).toHaveScreenshot("saucedemo-login.png", {
      maxDiffPixels: 200,
    });
  });

  test("Broken - intentional faliure to practice trace viewer", async ({
    page,
  }) => {
    await page.goto("https://www.saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator('.inventory_item')).toHaveCount(10);
  });
});
