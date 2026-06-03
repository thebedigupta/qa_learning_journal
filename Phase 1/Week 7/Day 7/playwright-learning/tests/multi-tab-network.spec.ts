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
  test("open new tab in same context share session", async ({ page }) => {
    // first login to saucedemo
    await page.goto("https://saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL(/inventory/i);

    // Open new tab in the same context
    const newPage = await page.context().newPage();
    await newPage.goto("https://www.saucedemo.com/inventory.html");

    await expect(newPage.locator(".inventory_item")).toHaveCount(6);

    await newPage.close();
  });
  test("Mock product API and verify fallback behaviour", async ({ page }) => {
    // Mocking route before hitting server (images not loaded)
    await page.route("**/*.{png,jpg,jpeg,gif}", (route) => route.abort());

    await page.goto("https://saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    // Page still load without images
    await expect(page.locator(".inventory_item")).toHaveCount(6);
    // Name of the products is still visible
    await expect(page.locator(".inventory_item_name").first()).toBeVisible();
  });
  test("Capture network requets during page load", async ({ page }) => {
    // Array to store request urls (only strings to keep it simple)
    const requests: string[] = [];

    // Capture request and store url in array
    page.on("request", (request) => {
      requests.push(request.url());
    });

    await page.goto("https://saucedemo.com");

    // verify page loaded
    await expect(page).toHaveURL(/saucedemo/i);

    // count number of requests made during page load
    console.log(`Request Made :${requests.length}`);

    // verify some requests were made
    expect(requests.length).toBeGreaterThan(0);
  });
  test("mock error response and verify page handle it", async ({ page }) => {
    // login with credentials and land on inventory page
    await page.goto("https://saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    // Mocking route before hitting server
    await page.route("**/*.json", (route) => {
      route.fulfill({
        status: 503,
        body: "Service Unavaliable",
      });
    });

    // Click on the cart icon
    await page.locator(".shopping_cart_link").click();

    await expect(page).toHaveURL(/cart/);

    // after landing this page make sure continue shopping button visible
    await expect(
      page.getByRole("button", { name: "Continue Shopping" }),
    ).toBeVisible();
  });
});
