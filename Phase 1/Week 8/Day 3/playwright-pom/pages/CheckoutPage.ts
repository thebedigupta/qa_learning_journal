import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  private readonly firsNameInput = this.page.locator('[data-test="firstName"]');
  private readonly lastNameInput = this.page.locator('[data-test="lastName"]');
  private readonly postalCodeinput = this.page.locator(
    '[data-test="postalCode"]',
  );
  private readonly errorShown = this.page.locator('[data-test="error"]');
  private readonly checkoutOverview = this.page.locator('[data-test="title"]');
  private readonly shoppingFinish = this.page.locator('[data-test="finish"]');
  private readonly continueShopping = this.page.locator(
    '[data-test="continue"]',
  );
  private readonly checkoutButton = this.page.locator('[data-test="checkout"]');
  private readonly summaryLabel = this.page.locator(
    '[data-test="total-info-label"]',
  );

  constructor(page: Page) {
    super(page);
  }

  async fillShippingInfo(
    expetcedFName: string,
    expectedLName: string,
    expectedZip: string,
  ) {
    await this.firsNameInput.fill(expetcedFName);
    await this.lastNameInput.fill(expectedLName);
    await this.postalCodeinput.fill(expectedZip);
    await this.continueShopping.click();
  }

  // Click Finish On the order summary screen finish order

  async finishOrder() {
    await this.shoppingFinish.click();
  }

  // Go Back to product page from the sucess screen

  async backToProduct() {
    await this.continueShopping.click();
  }

  // ----------------- Assertion --------------------

  // Assert we landed on Step 1 (form is visible)
  async OnCheckoutStepOne() {
    await expect(this.firsNameInput).toBeVisible();
  }

  // Assert we landed on step 2(Order Summary)

  async assertOnCheckoutStepTwo() {
    await expect(this.checkoutOverview).toContainText(/Overview/i);
  }
  // Assert Order was placed sucessfully
  async assertOrderStatus() {
    await expect(this.checkoutOverview).toContainText(/Complete!/i);
  }

  // Assert error shown when required field is missing
  async asserFormError(expectedText: string) {
    await expect(this.errorShown).toBeVisible();
    await expect(this.errorShown).toContainText(expectedText);
  }

  // Assert the item total label is visible (we're on overview screen)
  async assertItemTotalVisible() {
    await expect(this.summaryLabel).toBeVisible();
  }
}
