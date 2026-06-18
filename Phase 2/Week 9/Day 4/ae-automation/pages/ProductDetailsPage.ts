import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductDetailsPage extends BasePage {
  private readonly titleOfProduct = this.page.locator(
    ".product-information h2",
  );
  private readonly categoryCheckbox = this.page.getByText(/category/i);
  private readonly filterBrandCheckbox = this.page.getByText(/Brand/i);
  private readonly verifyAvailability = this.page.getByText(/Availability/i);
  private readonly verifyCondition = this.page.getByText(/condition/i);
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

  constructor(page: Page) {
    super(page);
  }

  async verifyProductsDetailsPage(): Promise<void> {
    await expect(this.titleOfProduct).toBeVisible();
    await expect(this.categoryCheckbox).toBeVisible();
    await expect(this.filterBrandCheckbox).toBeVisible();
    await expect(this.verifyAvailability).toBeVisible();
    await expect(this.verifyCondition).toBeVisible();
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
