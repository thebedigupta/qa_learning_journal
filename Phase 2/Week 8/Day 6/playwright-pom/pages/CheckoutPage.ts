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
    await expect(this.firsNameInput,'First Name Input Field is visible on step 1').toBeVisible();
  }

  // Assert we landed on step 2(Order Summary)

  async assertOnCheckoutStepTwo():Promise <void> {
    await expect(this.checkoutOverview,' Address form is visible').toContainText(/Overview/i);
  }
  // Assert Order was placed sucessfully
  async assertOrderStatus() :Promise <void>{
    await expect(this.checkoutOverview,'Order sucessfully Placed').toContainText(/Complete!/i);
  }

  // Assert error shown when required field is missing
  async asserFormError(expectedText: string) :Promise <void>{
    await expect(this.errorShown,`Error should be visible`).toBeVisible();
    await expect(this.errorShown,`Error should be visible which contain ${expectedText}`).toContainText(expectedText);
  }

  // Assert the item total label is visible (we're on overview screen)
  async assertItemTotalVisible():Promise <void> {
    await expect(this.summaryLabel,'We should be on overview screen').toBeVisible();
  }
}
