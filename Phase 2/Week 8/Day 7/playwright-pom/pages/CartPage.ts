import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * @class CartPage
 * @extends BasePage
 * @description Encapsulates UI locators and assertions for the SauceLabs Shopping Cart page.
 */
export class CartPage extends BasePage {
  /** @type {Locator} Row container for individual items in the cart */
  private readonly eachItemRow = this.page.locator(
    '[data-test="inventory-item"]',
  );

  /** @type {Locator} */
  private readonly continueShoppingBtn = this.page.locator(
    '[data-test="continue-shopping"]',
  );

  /** @type {Locator} */
  private readonly checkoutButton = this.page.locator('[data-test="checkout"]');

  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigates directly to the Cart page via direct URL.
   */
  async goto() {
    await super.goto("/cart.html");
  }

  /**
   * Clicks the checkout button to proceed to the checkout funnel.
   */
  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  /**
   * Clicks the continue shopping button to return to the product catalog.
   */
  async continueShopping() {
    await this.continueShoppingBtn.click();
  }

  /**
   * Filters the item rows by name and clicks its corresponding "Remove" button.
   * @param {string} expectedName - The exact text name of the product to remove.
   * @example
   * await cartPage.removeItem("Sauce Labs Backpack");
   */
  async removeItem(expectedName: string) {
    await this.eachItemRow
      .filter({ hasText: expectedName })
      .getByRole("button", { name: "Remove" })
      .click();
  }

  /**
   * Asserts that the exact number of items in the cart matches the expected count.
   * @param {number} expectedCount - Expected total row count.
   */
  async assertItemCount(expectedCount: number): Promise<void> {
    await expect(this.eachItemRow, "Item count is incorrect").toHaveCount(
      expectedCount,
    );
  }

  /**
   * Asserts that the cart contains zero items.
   */
  async assertCartIsEmpty(): Promise<void> {
    await expect(this.eachItemRow, "Cart is not empty").toHaveCount(0);
  }

  /**
   * Asserts that a product with the specific name is visible inside the cart.
   * @param {string} expectedName - The name of the item expected to display.
   */
  async assertItemInCart(expectedName: string): Promise<void> {
    await expect(
      this.eachItemRow.filter({ hasText: expectedName }),
      "Product was not found in cart",
    ).toBeVisible();
  }

  /**
   * Validates that the user is on the cart page by verifying checkout button visibility.
   */
  async assertOnCartPage(): Promise<void> {
    await expect(
      this.checkoutButton,
      "Checkout button is not visible",
    ).toBeVisible();
  }
}
