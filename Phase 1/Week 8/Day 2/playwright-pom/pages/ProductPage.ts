import { Page, expect } from "@playwright/test";

import { LoginPage } from "./LoginPage";

export class ProductPage extends LoginPage {
  private readonly pageTitle = this.page.locator(".title");
  private readonly cartIcon = this.page.locator(
    'data-test=".shopping_cart_link"',
  );
  private readonly cartBadge = this.page.locator(
    'data-test=".shopping_cart_badge"',
  );
  private readonly inventoryList = this.page.locator(
    'data-test=".inventory_item"',
  );

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto("/inventory.html");
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
