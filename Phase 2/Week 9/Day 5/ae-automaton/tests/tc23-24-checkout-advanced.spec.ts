import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";
import { payment, generateUniqueEmail, testUser } from "../utils/testData";

// TC 23 - Verify Address Details In Checkout match registration address
test("TC23: Delivery and Billing Address Match Registration", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const email = generateUniqueEmail();

  // Register
  await loginPage.open();
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

  // Add product and go to checkout
  await productPage.quickAddFirstProductToCart();
  await cartPage.open();
  await cartPage.proccedToCheckout();
  await checkoutPage.verifyCheckoutPage();

  //Both delivery and billing should show the registered Address
  await checkoutPage.verifyDeliveryAddress(testUser.city, testUser.country);
  await checkoutPage.verifyBillingAddress(testUser.city, testUser.country);
  await loginPage.deleteAccount();
});

test("TC24: Download invoice after placing Order", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const paymentPage = new PaymentPage(page);
  const email = generateUniqueEmail();

  // Register and add product
  await loginPage.open();
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

  await productPage.quickAddFirstProductToCart();

  await cartPage.open();
  await cartPage.proccedToCheckout();
  await checkoutPage.verifyCheckoutPage();
  await checkoutPage.enterCommentAndPlaceOrder("Test invoice download order");
  await paymentPage.fillPaymentDetails({
    cardName: payment.nameOnCard,
    cardNumber: payment.cardNumber,
    cvcNo: payment.cvc,
    month: payment.expiryMonth,
    year: payment.expiryYear,
  });
  await paymentPage.verifyOrderSuccess();

  // Download invoice and verify it triggers a file download
  await paymentPage.downloadInvoice();

  await paymentPage.continueButton();
  await loginPage.deleteAccount();
});
