import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  private readonly eachItemRow = this.page.locator(
    '[data-test="inventory-item"]',
  );
  private readonly continueShoppingBtn = this.page.locator(
    '[data-test="continue-shopping"]',

  );
  private readonly checkoutButton = this.page.locator('[data-test="checkout"]');

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await super.goto("/cart.html");
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingBtn.click();
  }

  // Remove specific product from cart by name
  async removeItem(expectedName: string) {
    await this.eachItemRow
      .filter({ hasText: expectedName })
      .getByRole("button", { name: "Remove" })
      .click();
  }

  // ----------- Assertion ----------------

  // Assert correct number of items in cart
  async assertItemCount(expectedCount : number) :Promise <void>{
    await expect(this.eachItemRow,'Item count is incorrect').toHaveCount(expectedCount);
  }

  // Assert cart shows zero items
  async assertCartIsEmpty():Promise <void>{
    await expect(this.eachItemRow,'Cart is empty').toHaveCount(0);
  }

  // Assertion Specific product name is visible in the cart
  async assertItemInCart(expectedName : string):Promise <void>{
    await expect(this.eachItemRow.filter({ hasText: expectedName }),'Specific name of the product is visible in the cart').toBeVisible();
  }

  // Assertion checkout button is visible (we are on the cart page)
  async assertOnCartPage():Promise <void>{
    await expect(this.checkoutButton,`Checkout button is visible`).toBeVisible();
  }
}
