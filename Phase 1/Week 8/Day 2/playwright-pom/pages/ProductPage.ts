import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  private readonly pageTitle = this.page.locator(".title");
  private readonly cartIcon = this.page.locator('.inventory_cart_link');
  private readonly cartBadge = this.page.locator(
    '.shopping_cart_badge'
  );
  private readonly inventoryList = this.page.locator(
    '.inventory_item');  

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await super.goto('/inventory.html');
  }

  async addToCartButton(productName: string) {
    await this.inventoryList
      .filter({ hasText: productName })
      .getByRole("button", { name: "Add to cart" })
      .click();
  }

  async removeProductFromCart(productName: string) {
    await this.inventoryList
      .filter({ hasText: productName })
      .getByRole("button", { name: "Remove" })
      .click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  // ------------- Assertions Methods ------------

  async assertOnProductPage() {
    await expect(this.pageTitle).toHaveText("Products");
  }

  async assertCartCount(expectedCount: number) {
    await expect(this.cartBadge).toHaveText(`${expectedCount}`);
  }

  async assertCartIsEmpty() {
    await expect(this.cartBadge).not.toBeVisible();
  }

  async assertProductIsVisible(productVisible: string) {
    await expect(
      this.inventoryList.filter({ hasText: productVisible }),
    ).toBeVisible();
  }
}
