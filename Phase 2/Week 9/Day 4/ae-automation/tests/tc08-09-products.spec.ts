import { test, expect } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { searchTerms } from "../utils/testData";

test.describe("Test all products are visible with search multiple terms and product details", () => {
  test.beforeEach(async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.open();
    await productPage.verifyAllProductsVisible();
  });

  // TC8 - View all products and product detail page

  test("TC8 - View all products and product detail page", async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.hoverAndAddToCart(0);
    await productPage.viewCartFromModal();
    const productDetailsPage = new ProductDetailsPage(page);
    await productDetailsPage.verifyProductsDetailsPage();
  });

  // TC9 - Search Products with different keywords

  for (let term of searchTerms) {
    test(`TC9 - Search Products with term ${term.trim()}`, async ({ page }) => {
      const productPage = new ProductPage(page);
      await productPage.searchProduct(term.trim());
      await productPage.verifySearchResultVisible();
    });
  }
});
