import { test, expect } from "@playwright/test";

test.describe("Modal handling on Automation Exercise", () => {
  test("handle add to cart modal pop up", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    await page.locator(".productinfo").nth(0).hover();
    await page.locator(".productinfo").nth(0).getByText("Add to cart").click();

    const modelBox = page.locator(".modal-content");
    await expect(modelBox).toContainText("Added");
    await modelBox.getByRole("button", { name: "Continue Shopping" }).click();
    await expect(modelBox).not.toBeVisible();
  });
  test("Add multiple prosucts via model flow", async ({ page }) => {
    await page.goto("https://automationexercise.com/");

    const modelPopup = page.locator(".modal-content");
    const productOne = page.locator(".productinfo").nth(0);
    await productOne.hover();
    await productOne.getByText("Add to cart").click();
    await expect(modelPopup).toBeVisible();
    await expect(modelPopup).toContainText("Added");
    await modelPopup.getByRole("button", { name: "Continue Shopping" }).click();
    await expect(modelPopup).not.toBeVisible();
    const productTwo = page.locator(".productinfo").nth(1);
    await productTwo.hover();
    await productTwo.getByText("Add to cart").click();
    await expect(modelPopup).toBeVisible();
    await expect(modelPopup).toContainText("Added");
    await modelPopup.getByRole("link", { name: "View Cart" }).click();
    await expect(page).toHaveURL(/.*view_cart/);
  });
  test("view cart from add to cart model", async ({ page }) => {
    await page.goto("https://automationexercise.com/");
    const modelPopup = page.locator(".modal-content");
    const productOne = page.locator(".productinfo").nth(0);
    await productOne.hover();
    await productOne.getByText("Add to cart").click();
    await expect(modelPopup).toBeVisible();
    await expect(modelPopup).toContainText("Added");
    await modelPopup.getByRole("link", { name: "View Cart" }).click();
    await expect(page).toHaveURL(/.*view_cart/);
  });
});
