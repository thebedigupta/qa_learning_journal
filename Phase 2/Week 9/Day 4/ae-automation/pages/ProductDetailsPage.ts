import { Page, Response, expect } from "@playwright/test";
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
    await expect(this.page.getByRole('img',{name:'ecommerce website products'}).first()).toBeVisible();
    await expect(
      this.page
        .locator(".product-information")
        .getByRole("button", { name: "Add to cart" }),
    ).toBeVisible();
    await this.page.waitForLoadState("networkidle");
  }

  async setQuantity(qty: number): Promise<void> {
    await this.productQuantity.fill(String(qty));
  }

  async addToCart(): Promise<void> {
    const responsePromise = this.page.waitForResponse(
      (response: Response) =>
        response.url().includes("/add_to_cart/") && response.status() === 200,
      { timeout: 30_000 },
    );

    await this.addProductToCart.click();

    const response = await responsePromise;
    expect(await response.text()).toBe("Added To Cart");
  }

  async viewCart(): Promise<void> {
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
