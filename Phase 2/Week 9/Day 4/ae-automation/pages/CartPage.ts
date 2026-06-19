import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
    private readonly productCountTable = this.page.locator('tbody tr');
    private readonly shoppingCartPage = this.page.getByText('Shopping Cart') ; 
    private readonly productCount = this.page.locator('.cart_quantity');
    private readonly removeProductLink = this.page.locator('.cart_quantity_delete');
    private readonly proceedToCheckoutBtn = this.page.getByRole('button', { name: 'Proceed To Checkout' });
    private readonly subscribeEmail = this.page.locator("#susbscribe_email");
    private readonly subscribeBtn = this.page.locator('#subscribe');
    constructor(page: Page) {
    super(page);
  }

  async open():Promise<void> {
    await this.init();
    await this.navigate('view_cart')
  }

  async verifyCartPageDisplayed(url:string):Promise<void>{
    await expect(this.page).toHaveURL('view_cart');
  }

  async verifyProductCount(count :number):Promise<void>{
await expect(this.productCountTable).toHaveCount(count);
  }

  async verifyCartPageDetails():Promise<void>{
    await expect(this.shoppingCartPage).toBeVisible();
  }

  async verifyProductQuantity(productInCart:number):Promise<void>{
    await expect(this.productCount.nth(0)).toHaveText(String(productInCart));
  }

  async removeFirstProduct():Promise<void>{
    await this.removeProductLink.nth(0).click();
  }

  async proceedToCheckout():Promise<void>{
    await this.proceedToCheckoutBtn.click();
  }

  async subsribeFromCart(email:string):Promise<void>{
    await this.subscribeEmail.fill(email)
    await this.subscribeBtn.click();
  }


}
