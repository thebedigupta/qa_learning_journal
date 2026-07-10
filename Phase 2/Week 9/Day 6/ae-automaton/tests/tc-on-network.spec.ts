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

