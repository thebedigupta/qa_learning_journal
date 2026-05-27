import { test, expect } from "@playwright/test";

test.describe("SauceDemo Complete Checkout flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    const loginBtn = page.locator("#login-button");
    await loginBtn.click();
    await expect(page).toHaveURL(/inventory/i);
    console.log("Now you are logged in and in the inventory page");
  });

  test("Add single product to cart and verify cart count", async ({ page }) => {
    // Product selection and adding to cart
    await page.locator(".inventory_list > .inventory_item").filter({ hasText: "Sauce Labs Backpack" }).getByRole("button", { name: "Add to cart" }).click();
    // Verify Cart Count
    await expect(page.locator(".shopping_cart_link > span")).toHaveCount(1);
  });
});
