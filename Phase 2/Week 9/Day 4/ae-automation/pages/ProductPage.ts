import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
  private readonly productPageVisible = this.page.getByText(/all products/i);
  private readonly productWrapper = this.page.locator(".product-image-wrapper");
  private readonly searchProductsInput = this.page.locator("#search_product");
  private readonly searchProductButton = this.page.locator("#submit_search");
  private readonly verifySearchProduct =
    this.page.getByText(/Searched Products/i);
  private readonly continueShoppingModelBtn = this.page.locator(".btn-success");
  private readonly viewCartModalBtn = this.page.locator('a[href="/view_cart"]');
  private readonly viewCartBtn = this.page.locator(".nav");
  private readonly brandName = this.page.locator(".brands-name");
  private readonly searchBrandProduct = this.page.locator(".text-center");

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.init();
    await this.navigate("products");
  }

  async verifyAllProductsVisible(): Promise<void> {
    await expect(this.productPageVisible).toBeVisible();
    await expect(this.productWrapper).toBeVisible();
  }

  async searchProduct(productName: string): Promise<void> {
    await this.searchProductsInput.fill(productName);
    await this.searchProductButton.click();
  }
  async verifySearchResultVisible(): Promise<void> {
    await expect(this.verifySearchProduct).toBeVisible();
  }
  async hoverAndAddToCart(index: number): Promise<void> {
    await this.productWrapper
      .getByRole("button", { name: "Add to cart" })
      .nth(index)
      .click();
  }
  async continueShopping(): Promise<void> {
    await this.continueShoppingModelBtn.click();
  }
  async viewCartFromModal(): Promise<void> {
    await this.viewCartModalBtn.click();
  }
  async clickViewProduct(): Promise<void> {
    await this.viewCartBtn.getByRole("link", { name: "Cart" }).click();
  }
  async clickBrand(brandName: string): Promise<void> {
    await this.brandName
      .locator(`a[href="brand_products/${brandName}"]`)
      .click();
  }
  async verifyBrandProductsVisible(brandName: string): Promise<void> {
    await expect(this.searchBrandProduct).toContainText(
      new RegExp(`Brand - ${brandName} Products`, "i"),
    );
  }
}
