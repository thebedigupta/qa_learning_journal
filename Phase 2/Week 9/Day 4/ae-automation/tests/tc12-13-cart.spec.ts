import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";

test.describe("Cart and Quantity Verification Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.route(
      "**/*{google-analytics,googlesyndication,doubleclick,amazon-adsystem,adnxs,popads}**",
      (route) => route.abort(),
    );
  });

  // TC12 - Add Two Products to Cart and Verify

  test(`TC12 - Add two product to cart and verify`, async ({ page }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await productPage.open();
    await productPage.verifyAllProductsVisible();

    await productPage.hoverAndAddToCart(0);
    await productPage.continueShopping();
    await productPage.hoverAndAddToCart(1);
    await productPage.clickViewProduct();

    await cartPage.open();
    await cartPage.verifyProductCount(2);
  });

  // TC13 - Set Quantity 4 and verify in cart

  test("TC13 - Set Quantity 4 and verify in cart", async ({ page }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const productDetailPage = new ProductDetailsPage(page);

    await productPage.open();
    await productPage.verifyAllProductsVisible();

    await page.locator(".choose a").first().click();
    await productDetailPage.verifyProductsDetailsPage();
    await productDetailPage.setQuantity(4);
    await productDetailPage.addToCart();
    await productDetailPage.viewCart();
    await cartPage.verifyProductQuantity('blue top',4);
  });
});
