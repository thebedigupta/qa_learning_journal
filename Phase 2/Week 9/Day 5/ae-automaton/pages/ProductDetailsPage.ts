import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPage extends BasePage {
  private readonly productQuantity = this.page.locator("#quantity");
  private readonly addProductToCart = this.page.getByRole("button", {
    name: "Add to cart",
  });
  private readonly viewCartProductsModalBtn = this.page.locator(
    ".modal-content .text-center",
  );
  private readonly reviewNameInput = this.page.locator("#name");
  private readonly reviewEmailInput = this.page.locator("#email");
  private readonly reviewMessageBox = this.page.locator("#review");
  private readonly reviewButton = this.page.locator("#button-review");
  private readonly checkoutBtn = this.page.locator('.container .check_out'); 
  private readonly itemTable = this.page.locator('#cart_info_table');
  private readonly shoppingCartTitle = this.page.locator('.breadcrumbs .active');

  constructor(page: Page) {
    super(page);
  }

  async verifyProductsDetailsPage(): Promise<void> {
    await expect(this.itemTable).toBeVisible();
    await expect(this.shoppingCartTitle).toHaveText(/Shopping Cart/i);
    await expect(this.checkoutBtn).toHaveText(/Proceed To Checkout/i);
  }

  async setQuantity(qty: number): Promise<void> {
    await this.productQuantity.fill(String(qty));
  }

  async addToCart(): Promise<void> {
    await this.addProductToCart.click();
  }

  async viewCart(): Promise<void> {
    await this.viewCartProductsModalBtn.locator('a[href="/view_cart"]').click();
  }

  async fillreview(
    name: string,
    email: string,
    message: string,
  ): Promise<void> {
    await this.reviewNameInput.fill(name);
    await this.reviewEmailInput.fill(email);
    await this.reviewMessageBox.fill(message);
    await this.reviewButton.click();
  }
}
