import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  private readonly cartButton = this.page.locator(
    '[data-test=".inventory_item_link"]',
  );
  private readonly shoppingBadge = this.page.locator(
    '[data-test="shopping-cart-badge"]',
  );
  private readonly eachItemRow = this.page.locator(
    '[data-test="inventory-item"]',
  );
  private readonly inventoryItemName = this.page.locator(
    '[data-test="inventory-item-name"]',
  );
  private readonly continueShoppingBtn = this.page.locator(
    '[data-test="continue-shopping"]',
  );
  private readonly checkoutButton = this.page.locator('[data-test="checkout"]');

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await super.goto("/inventory.html");
  }

  async proceedToCheckout() {
    await this.cartButton.click();
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
  async assertItemCount() {
    await this.shoppingBadge.count();
  }

  // Assertion Specific product name is visible in the cart
  async assertItemInCart(expectedName : string){
    await expect(this.inventoryItemName.filter({ hasText: expectedName })).toBeVisible();
  }

  // Assertion checkout button is visible (we are on the cart page)
  async assertOnCartPage(){
    await expect(this.checkoutButton).toBeVisible();
  }
}
