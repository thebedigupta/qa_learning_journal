import { test, expect } from "@playwright/test";

test.describe("Multi-tab and network Interception", () => {
  test("handle new tab opening from link", async ({ page }) => {
    await page.goto("https://saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    // Find a link that open in a new tab
    const [newPage] = await Promise.all([
      page.waitForEvent("popup"),
      // Homepage have social media links opening in new tabs
      page.locator('a[href*="facebook"]').first().click(),
    ]);
    // Verify new tab opened
    await newPage.waitForLoadState("domcontentloaded");
    expect(newPage.url()).toContain("facebook");

    // close new tab
    await newPage.close();

    //Verify original page still correct
    await expect(page).toHaveURL(/inventory/i);
  });
});
