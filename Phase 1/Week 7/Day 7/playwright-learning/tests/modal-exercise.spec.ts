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
});
