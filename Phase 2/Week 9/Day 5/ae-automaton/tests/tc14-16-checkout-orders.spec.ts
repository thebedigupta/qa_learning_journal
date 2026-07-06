import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { generateUniqueEmail, testUser, payment } from "../utils/testData";

// ── Shared helper ────────────────────────────────────────────────────────────
async function completePaymentAndVerify(
  checkoutPage: CheckoutPage,
  paymentPage: PaymentPage,
) {
  await checkoutPage.enterCommentAndPlaceOrder("Automated order comment");
  await paymentPage.fillPaymentDetails({
    cardName: payment.nameOnCard,
    cardNumber: payment.cardNumber,
    cvcNo: payment.cvc,
    month: payment.expiryMonth,
    year: payment.expiryYear,
  });
  await paymentPage.verifyOrderSuccess();
}

test("TC14: Place order - register while checkout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);
  const email = generateUniqueEmail();

  await productPage.quickAddFirstProductToCart();
  await cartPage.open();
  await cartPage.verifyCartPageDisplayed();
  await cartPage.proccedToCheckout();
  await checkoutPage.clickRegisterLoginFromModal();
  await loginPage.fillSignUpNameAndEmail(testUser.name, email);
  await loginPage.fillAccountInformation(
    testUser.title,
    testUser.name,
    testUser.password,
    testUser.dob,
  );
  await loginPage.fillAddressInformation(
    testUser.firstName,
    testUser.lastName,
    testUser.company,
    testUser.address1,
    testUser.address2,
    testUser.country,
    testUser.state,
    testUser.city,
    testUser.zipcode,
    testUser.mobile,
  );
  await loginPage.verifyAccountCreated();
  await loginPage.verifyLoggedIn(testUser.firstName);
  await cartPage.open();
  await cartPage.proccedToCheckout();
  await checkoutPage.verifyCheckoutPage();
  await completePaymentAndVerify(checkoutPage,paymentPage);
  await paymentPage.continueButton();
  await loginPage.deleteAccount();
});
