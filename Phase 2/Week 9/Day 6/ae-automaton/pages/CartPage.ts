import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  private readonly productCountTable = this.page.locator("tbody tr");
  private readonly shoppingCartPage = this.page.getByText("Shopping Cart");
  private readonly productCount = this.page.locator(".cart_quantity");
  private readonly subscriptionEmailInput =
    this.page.locator("#susbscribe_email");
  private readonly subscribeBtn = this.page.locator("#subscribe");
  private readonly proccedToCheckoutBtn = this.page.locator("a.btn");
  private readonly removeProductBtn = this.page.locator(".cart_delete a");
  private readonly emptyCartMessage = this.page.locator('.text-center');
  // function
  productNameFunction(name: string) {
    return this.page.locator("tbody").filter({ hasText: name });
  }

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.init();
    await this.navigate("view_cart");
  }

  async proccedToCheckout() {
    await this.proccedToCheckoutBtn.click();
  }

  async verifyCartPageDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL(
      "https://www.automationexercise.com/view_cart",
    );
  }

  async verifyProductCount(count: number): Promise<void> {
    await expect(this.productCountTable).toHaveCount(count);
  }

  async verifyCartPageDetails(): Promise<void> {
    await expect(this.shoppingCartPage).toBeVisible();
  }

  async verifyProductQuantity(
    productName: string,
    productInCart: number,
  ): Promise<void> {
    await expect(
      this.productNameFunction(productName).getByRole("cell", {
        name: String(productInCart),
      }),
    ).toBeVisible();
  }

  async verifyCartIsEmpty(){
    await expect(this.emptyCartMessage.locator('a[href="/products"]')).toBeVisible();
  }

  async removeFirstProduct(): Promise<void> {
    await this.removeProductBtn.first().click();
  }

  async addEmailToSubscription(email: string): Promise<void> {
    await this.subscriptionEmailInput.fill(email);
    await this.subscribeBtn.click();
  }
}
