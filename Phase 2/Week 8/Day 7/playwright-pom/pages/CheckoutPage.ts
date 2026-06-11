import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * Page Object for the step one checkout page
 * URL : https://wwww.saucedemo.com/
 * Handles checkout interactions and navigating towards step two of checkout page
 * Also includes assertions related to the checkout page and cart state.
 */
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

  /**
   * Fills in all three fields of the shipping information form and submits.
   * Navigates from Step 1 to Step 2 (order overview) on success.
   * @param firstName - Customer first name
   * @param lastName  - Customer last name
   * @param zip       - Postal/ZIP code
   * @example
   * await checkoutPage.fillShippingInfo('Bedi', 'Gupta', '555001');
   */

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

  /**
   * Clicks the Finish button on the order overview page to complete the checkout process.
   * Navigates to the order confirmation page on success.
   * @example
   * await checkoutPage.finishOrder();
   */

  async finishOrder() {
    await this.shoppingFinish.click();
  }

  /**
   * Clicks the Back Home button on the order success screen.
   * Returns the user to the products page.
   * @example
   * await this.continueShopping.click();
   */

  async backToProduct() {
    await this.continueShopping.click();
  }

  /**
   * Asserts the user is on Step 1 by checking the first name input is visible.
   * @example
   * await checkoutPage.assertOnCheckoutStepOne();
   */

  async OnCheckoutStepOne() {
    await expect(
      this.firsNameInput,
      "First Name Input Field is visible on step 1",
    ).toBeVisible();
  }

  /**
   * Assert User is on Step 2 by checking the title contain text 'Overview'
   * @example
   * await checkoutPage.assertOnCheckoutStepTwo()
   */

  async assertOnCheckoutStepTwo(): Promise<void> {
    await expect(
      this.checkoutOverview,
      " Address form is visible",
    ).toContainText(/Overview/i);
  }
  
  /**
   * Assert Order is placed sucessfully by checking the title contain text 'Complete!'
   * @example
   * await this.checkoutOverview
   */

  async assertOrderStatus(): Promise<void> {
    await expect(
      this.checkoutOverview,
      "Order sucessfully Placed",
    ).toContainText(/Complete!/i);
  }

  /**
   * Assert Form Error is displayed when user try to continue without filling the form
   * @example
   * await checkoutPage.assertFormError('Error: First Name is required');
   * await checkoutPage.assertFormError('Error: Last Name is required');
   * await checkoutPage.assertFormError('Error: Postal Code is required'); 
   */

  async assertFormError(expectedText: string): Promise<void> {
    await expect(this.errorShown, `Error should be visible`).toBeVisible();
    await expect(
      this.errorShown,
      `Error should be visible which contain ${expectedText}`,
    ).toContainText(expectedText);
  }

  /**
   * Asser the user is on the cart page and summar label is visible
   * @example
   * await checkoutPage.assertItemTotalVisible();
   */

  // Assert the item total label is visible (we're on overview screen)
  async assertItemTotalVisible(): Promise<void> {
    await expect(
      this.summaryLabel,
      "We should be on overview screen",
    ).toBeVisible();
  }
}
