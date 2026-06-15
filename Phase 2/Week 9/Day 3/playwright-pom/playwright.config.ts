// playwright.config.ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  retries: process.env.CI ? 2 : 0,
  expect: {
    toHaveScreenshot: { maxDiffPixels: 50 },
  },
  testDir: "./tests",
  fullyParallel: true,
  // How many tests run at the same time
  // 'undefined' = Playwright picks based on your CPU cores
  // Set to a number if you want to control it: workers: 4
  workers: undefined,
  reporter: "html",
  snapshotDir: "./screenshot",

  use: {
    baseURL: "https://www.saucedemo.com", // ← set once here, never hardcode in pages
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    // { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});
