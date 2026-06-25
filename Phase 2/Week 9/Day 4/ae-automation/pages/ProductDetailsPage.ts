import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPage extends BasePage {
  private readonly productQuantity = this.page.locator("#quantity");
  private readonly addProductToCart = this.page.getByRole("button", {
    name: "Add to cart",
  });
  private readonly reviewNameInput = this.page.locator("#name");
  private readonly reviewEmailInput = this.page.locator("#email");
  private readonly reviewMessageBox = this.page.locator("#review");
  private readonly reviewButton = this.page.locator("#button-review");
  private readonly viewCartModalLink = this.page.locator(".modal-content");

  constructor(page: Page) {
    super(page);
  }

  async verifyProductsDetailsPage(): Promise<void> {
    await expect(this.page.locator(".product-information")).toBeVisible();
    await expect(
      this.page
        .locator(".product-information")
        .getByRole("button", { name: "Add to cart" }),
    ).toBeVisible();
  }

  async setQuantity(qty: number): Promise<void> {
    await this.productQuantity.fill(String(qty));
  }

  async addToCart(): Promise<void> {
    await this.addProductToCart.click();
  }

  async viewCart(): Promise<void> {
    // Wait for the modal link text specifically to pop up on screen
    await this.viewCartModalLink.locator('a[href="/view_cart"]').click();
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
