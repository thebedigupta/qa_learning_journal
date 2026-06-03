import { test, expect } from "@playwright/test";

test.describe("Modal handling on automation exercise", () => {
  test("handle add to cart modal popup", async ({ page }) => {
    await page.goto("https://automationexercise.com/products");

    // Hover over first product to reveal Add to Cart button
    await page.locator(".product-image-wrapper").first().hover();

    // Click Add to Cart
    await page
      .locator(".product-image-wrapper")
      .first()
      .getByText("Add to cart")
      .click();

    // Modal appears — wait for it
    const modal = page.locator("#cartModal");
    await expect(modal).toBeVisible();

    // Assert modal content
    await expect(modal.getByText("Added!")).toBeVisible();

    // Click Continue Shopping to close modal
    await modal.getByRole("button", { name: "Continue Shopping" }).click();

    // Assert modal closed
    await expect(modal).not.toBeVisible();
  });
});
