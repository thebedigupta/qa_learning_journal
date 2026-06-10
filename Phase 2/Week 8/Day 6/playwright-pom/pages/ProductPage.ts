import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  private readonly pageTitle = this.page.locator('[test-data="title"]');
  private readonly cartItem = this.page.locator(
    '[data-test="shopping-cart-link"]',
  );
  private readonly cartBridge = this.page.locator(
    '[data-test="shopping-cart-badge"]',
  );
  private readonly inventoryList = this.page.locator(
    '[data-test="inventory-list"]',
  );
  private readonly inventoryItem = this.page.locator(
    '[data-test="inventory-item"]',
  );

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await super.goto("/inventory.html");
  }

  async addProductsToCart(productName: string) {
    await this.inventoryItem
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
    await this.cartBridge.click();
  }

  async assertOnProductPage():Promise <void>{
    await expect(this.page,'Login failed - URL should contain /inventory.html').toHaveURL('/inventory.html');
  }

  async cartCount(productNumber:number):Promise <void>{
    await expect(this.cartBridge,'Cart count is incorrect').toHaveText(String(productNumber));
  }

  async assertCartIsEmpty():Promise <void>{
    await expect(this.cartBridge,'Cart is not empty').toBeHidden();
  }

  async ProductIsVisible(expectedName:string):Promise <void>{
    await expect(this.inventoryItem.filter({hasText: expectedName})).toBeVisible();
  }

}
