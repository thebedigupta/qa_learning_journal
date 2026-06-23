import { test, expect } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { searchTerms } from "../utils/testData";

test.describe("Test all products are visible with search multiple terms and product details", () => {
  // TC8 - View all products and product detail page

  test("TC8 - View all products and product detail page", async ({ page }) => {
    const productPage = new ProductPage(page);
    const productDetailsPage = new ProductDetailsPage(page);

    await productPage.open();
    await productPage.verifyAllProductsVisible();
    await productPage.hoverAndAddToCart(0);
    await productPage.viewCartFromModal();
    await productDetailsPage.verifyProductsDetailsPage();
  });

  // TC9 - Search Products with different keywords
  test.describe("", () => {
    for (let term of searchTerms) {
      test(`TC9 - Search Products with term ${term.trim()}`, async ({
        page,
      }) => {
        const productPage = new ProductPage(page);
        await productPage.open();
        await productPage.verifyAllProductsVisible();
        await productPage.searchProduct(term.trim());
        await productPage.verifySearchResultVisible();
      });
    }
  });
});
