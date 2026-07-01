import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  private readonly firstProductImageVisible = this.page
    .locator("#product-1")
    .getByRole("link", { name: "Product Image" });
  private readonly registerLoginModalPopup = this.page.getByText(
    "Checkout Register / Login",
  );
  private readonly clickRegisterLoginBtn = this.page.getByRole("link", {
    name: "Register/Login",
  });
  private readonly deliveryAddress = this.page.locator('#address_delivery');
  private readonly deliveryInvoice = this.page.locator('#address_invoice');
  private readonly commentBox = this.page.locator('textarea.form-control');
  private readonly placeOrderBtn = this.page.getByRole('link',{name:'Place Order',exact:true});
  constructor(page: Page) {
    super(page);
  }

  async verifyCheckoutPage(): Promise<void> {
    await expect(this.page).toHaveURL(/checkout/i);
    await expect(this.firstProductImageVisible).toBeVisible();
  }

  async clickRegisterLoginFromModal(): Promise<void> {
    await expect(this.registerLoginModalPopup).toBeVisible();
    await this.clickRegisterLoginBtn.click();
  }

  async verifyDeliveryAddress(address: string,country:string): Promise<void> {
    await expect(this.deliveryAddress.getByText(address)).toBeVisible();
    await expect(this.deliveryAddress.getByText(country)).toBeVisible();
  }

  async verifyBillingAddress(address:string,country:string){
    await expect(this.deliveryInvoice.getByText(address)).toBeVisible();
    await expect(this.deliveryInvoice.getByText(country)).toBeVisible();
  }

  async enterCommentAndPlaceOrder(comment:string):Promise<void>{
    await this.commentBox.fill(comment);
    await this.placeOrderBtn.click();
  }
}
