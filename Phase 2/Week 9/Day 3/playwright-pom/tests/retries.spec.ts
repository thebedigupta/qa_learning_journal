import { test, expect } from "@playwright/test";

test.describe.configure({ retries: 2 });

let attemptCount = 0;

test("simulates falky test failed once then passed", async ({
  page,
}, testInfo) => {
  attemptCount++;
  console.log(`Attempt: ${testInfo.retry + 1} | Counter: ${attemptCount}`);

  await page.goto("https://www.saucedemo.com");

  if (testInfo.retry === 0) {
    throw new Error("Simulates Network Hiccp");
  }

  await expect(page).toHaveTitle(/swag labs/i);
});

test("timing based flakyness - retry with wait", async ({ page }, testInfo) => {
  attemptCount++;

  await page.goto("https://www.saucedemo.com");

  if (testInfo.retry === 0) {
    const title = await page.title();
    if (title !== "Swag Labs!!!") {
      throw new Error("Title is mismatch");
    }
  }

  await expect(page).toHaveTitle(/Swag Labs/i);
  console.log(`Passed on attempt #${testInfo.retry + 1}`);
});
