import { test, expect } from "@playwright/test";

// 1. This we did for Finding API call

test("Intercept add-to-cart request found via Network tab", async ({
  page,
}) => {
  await page.route(/googlesyndication|doubleclick/, (res) => res.abort());

  const responsePromise = page.waitForResponse(
    (res) =>
      res.url().includes("automationexercise") &&
      res.request().method() !== "GET",
    { timeout: 30_000 },
  );

  await page.goto("https://www.automationexercise.com/products");

  // Hover and click Add to cart on first product
  const firstProduct = page.locator(".product-image-wrapper").first();
  await firstProduct.hover();
  await firstProduct.getByText("Add to cart", { exact: false }).first().click();

  try {
    const response = await responsePromise;
    console.log("Intercepted URL :", response.url());
    console.log("Status:", response.status());
  } catch {
    console.log("No XHR request fired - site uses server-side cart update");
  }

  // Regardless - verify the modal appeared
  await page.waitForLoadState("networkidle");
  await expect(
    page.getByRole("button", { name: "Continue Shopping" }),
  ).toBeVisible();
});

// 2. This we are doing to Find a locator codegen missed

test("use locator found via Element tab - cart bridge", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // Add a product
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // This element is found via Element tab, not codegen
  const badge = page.locator(".shopping_cart_badge");
  await expect(badge).toBeVisible();
  await expect(badge).toHaveText("1");

  // Read the badge value using page.evaluate
  const badgeCount = await page.evaluate(
    () => document.querySelector(".shopping_cart_badge")?.textContent,
  );
  console.log("Badge value is: ", badgeCount);
  expect(badgeCount).toBe("1");
});

// 3. Read Evaluate Read DOM values in a test

test("page.evaluate() - read DOM values", async ({ page }) => {
  await page.goto(`https://www.saucedemo.com`);
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // 1. Read Page title via evaluate
  const title = await page.evaluate(() => document.title);
  console.log("Title:", title);
  expect(title).toBe("Swag Labs");

  // 2. Count product cards
  const productCount = await page.evaluate(
    () => document.querySelectorAll(".inventory_item").length,
  );
  console.log("Product Count:", productCount);
  expect(productCount).toBe(6);

  // 3. Get All Product Name as an array
  const productNames = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".inventory_item_name")).map((e) =>
      e.textContent?.trim(),
    ),
  );

  console.log("Product Names:", productNames);
  expect(productNames).toHaveLength(6);
  expect(productNames[0]).toBe("Sauce Labs Backpack");

  // 4. Read a value passed from test scope into browser scope
  const expectedName = "Swag Labs";
  const titleMatches = await page.evaluate(
    (brand) => document.title.includes(brand),
    expectedName,
  );
  expect(titleMatches).toBe(true);

  // 5 Check Local Storage
  const sessionItem = await page.evaluate(
    () => Object.keys(localStorage).join(",") || "localstroage is empty",
  );
  console.log("localstorage keys:", sessionItem);
});

test("page.evaluate() — DOM manipulation (removing banners)", async ({
  page,
}) => {
  await page.goto(`https://www.automationexercise.com`);

  // Remove any element by selector
  await page.evaluate((selector) => {
    document.querySelector(selector)?.remove();
  }, ".visual_failure");

  // Scroll to bottom via JS
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  const scrollY = await page.evaluate(() => window.scrollY);
  console.log("Scroll Position:", scrollY);
  expect(scrollY).toBeGreaterThan(0);
});
