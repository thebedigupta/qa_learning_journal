import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { users } from "../utils/testData";
import productData from "../utils/productData.json";

test.describe("Product Cart Validation Suite @regression", () => {
  for (const { productName } of productData) {
    test(`test for ${productName}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const productPage = new ProductPage(page);
      const cartPage = new CartPage(page);

      // Step 1 : Login In (same every run)

      await loginPage.goto();
      await loginPage.login(users.standard.username, users.standard.password);
      await loginPage.assertLoginSucess();

      // Step 2 : Add this product ( data changes at ecah run)

      await productPage.addProductsToCart(productName);
      await productPage.cartCount(1);
      await productPage.goToCart();

      // Step 3 : Verify it's in the cart
      await cartPage.assertOnCartPage();
      await cartPage.assertItemInCart(productName);
      await cartPage.assertItemCount(1);
    });
  }
});
