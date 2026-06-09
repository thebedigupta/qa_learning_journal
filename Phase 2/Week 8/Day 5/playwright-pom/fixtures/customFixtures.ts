import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";
import { ProductPage } from "../pages/ProductPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { users, products } from "../utils/testData";

type customFixtures = {
  loggedInPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};
export const test = base.extend<customFixtures>({
  loggedInPage: async ({ page }, use) => {
    // Fixtures 1 : LoggedInPage

    // This logged in page get's product page after login

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.assertLoginSucess();

    // Provieded

    const productPage = new ProductPage(page);
    await use(productPage);

    // TearDown : nothing needed playwright handles page cleaup
  },

  // ── FIXTURE 2: cartPage ─────────────────────────────────────
  // Logs in AND adds a backpack so tests start with one item in cart

  cartPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.assertLoginSucess();

    const productPage = new ProductPage(page);
    await productPage.addProductsToCart(products.backpack);
    await productPage.goToCart();

    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  checkoutPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.assertLoginSucess();

    const productPage = new ProductPage(page);
    await productPage.addProductsToCart(products.tshirt);
    await productPage.goToCart();

    const cartPage = new CartPage(page);
    await cartPage.proceedToCheckout();

    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
});

export {expect} from "@playwright/test";