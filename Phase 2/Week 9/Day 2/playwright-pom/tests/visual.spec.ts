import { test, expect } from "@playwright/test";

test("screenshot to file - saucedemo homepage", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.screenshot({
    path: "screenshot/saucedemo-home.png",
    fullPage: true,
  });
  // Element screenshot
  await page.locator(".login_container").screenshot({
    path: "screenshot/login-form.png",
  });
});

test("visual regression - login page baseline", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveScreenshot("saucedemo-login-form.png", {
    maxDiffPixels: 50,
  });
});

test("visual regression - login page with intentional breakdown", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.evaluate(() => {
    const logo = document.querySelector(".login_logo");
    if (logo instanceof HTMLElement) {
      logo.style.color = "red";
    }
  });
});

test("element-level snapshot - product list", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
  await expect(page.locator(".inventory_list")).toHaveScreenshot(
    "saucedemo-product.png",
    {
      maxDiffPixels: 50,
    },
  );
});