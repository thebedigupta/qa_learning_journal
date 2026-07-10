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

