import { test, expect } from "@playwright/test";
import { abort } from "process";

test("Mock API Completely", async ({ page }) => {
  await page.route("*/**/api/v1/fruits", async (route) => {
    const json = [
      { name: "Jack Fruit", id: 998 },
      { name: "Dragon Fruit", id: 999 },
    ];
    await route.fulfill({ json });
  });
  await page.goto("https://demo.playwright.dev/api-mocking");
  await expect(page.getByText("Jack Fruit")).toBeVisible();
  await expect(page.getByText("Dragon Fruit")).toBeVisible();
});


