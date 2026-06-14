import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { users, products } from "../utils/testData";

test.describe("Shopping Cart | Add and verify products", () => {
  // Test 4 -------------------------------------------------------------------

  test("@smoke add two products → cart count shows 2", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Step 1 : User land on home screen and login

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.assertLoginSucess();

    // Step 2 : User bought two things and verify cart count

    await productPage.goto();
    await productPage.addProductsToCart(products.bikeLight);
    await productPage.cartCount(1);

    await productPage.addProductsToCart(products.backpack);
    await productPage.cartCount(2);
    await productPage.goToCart();

    // Step 3 : Go to cart and verify each item

    await cartPage.goto();
    await cartPage.assertItemCount(2);
    await cartPage.assertItemInCart(products.bikeLight);
    await cartPage.assertItemInCart(products.backpack);
  });
});
