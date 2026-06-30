import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
    private readonly firstProductImageVisible = this.page.locator('#product-1').getByRole('link', { name: 'Product Image' });
    private readonly registerLoginModalPopup = this.page.getByText('Checkout Register / Login');
    private readonly clickRegisterLoginBtn = this.page.getByRole('link',{name:'Register/Login'});
  constructor(page: Page) {
    super(page);
  }

  async verifyCheckoutPage():Promise<void>{
    await expect(this.page).toHaveURL(/checkout/i);
    await expect(this.firstProductImageVisible).toBeVisible();
  }

  async clickRegisterLoginFromModal():Promise<void>{
    await expect(this.registerLoginModalPopup).toBeVisible();
    await this.clickRegisterLoginBtn.click(); 
  }

  
}
