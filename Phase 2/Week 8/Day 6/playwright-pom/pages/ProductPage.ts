import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

/**
 * Page Object for the Product Page (inventory page) of Saucedemo.
 * URL : https://www.saucedemo.com/inventory.html
 * Handles interactions with the product listing, adding/removing items from cart, and navigating to the cart page.
 * Also includes assertions related to the product page and cart state.
 */

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

  /**
   * Navigates to the product page (inventory page) of Saucedemo.
   * @example
   * await productPage.goto();
   */

  async goto() {
    await super.goto("/inventory.html");
  }

  /**
   * Help add product to cart and remove from it  
   * @param productName - product name that you want to add in cart
   */

  async addProductsToCart(productName: string) {
    await this.inventoryItem
      .filter({ hasText: productName })
      .getByRole("button", { name: "Add to cart" })
      .click();
  }

  /**
   * Help in remove product from cart with the UI interaction
   * @param productName - remove product by it's name from the cart
   */

  async removeProductFromCart(productName: string) {
    await this.inventoryList
      .filter({ hasText: productName })
      .getByRole("button", { name: "Remove" })
      .click();
  }

  /**
   * Help in moving from product page to cart page (saucedemo)
   */

  async goToCart() {
    await this.cartBridge.click();
  }

  /**
   * User is on login page or product page
   */

  async assertOnProductPage():Promise <void>{
    await expect(this.page,'Login failed - URL should contain /inventory.html').toHaveURL('/inventory.html');
  }

  /**
   * Assert to know how many products are added in the cart
   * @param productNumber 
   */

  async cartCount(productNumber:number):Promise <void>{
    await expect(this.cartBridge,'Cart count is incorrect').toHaveText(String(productNumber));
  }

  /**
   * Assert the cart is empty by checking the cart badge is not visible
    * @example
    * await checkoutPage.assertCartIsEmpty();
   */

  async assertCartIsEmpty():Promise <void>{
    await expect(this.cartBridge,'Cart is not empty').toBeHidden();
  }

  /**
   * Assert the product is visible on the product page by checking the product name is visible
   * @example
   * await productPage.ProductIsVisible('Sauce Labs Backpack');
   * await productPage.ProductIsVisible('Sauce Labs Bike Light');
   * @param expectedName - name of the product that should be visible on the product page
   */

  async ProductIsVisible(expectedName:string):Promise <void>{
    await expect(this.inventoryItem.filter({hasText: expectedName})).toBeVisible();
  }

}
