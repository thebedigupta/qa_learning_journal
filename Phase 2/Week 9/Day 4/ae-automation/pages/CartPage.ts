import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
    private readonly productCountTable = this.page.locator('tbody tr');
    private readonly shoppingCartPage = this.page.getByText('Shopping Cart') ; 
    private readonly productCount = this.page.locator('.cart_quantity');
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
    await expect(this.productCount.nth(0)).toHaveCount(productInCart);
  }

  async removeFirstProduct():Promise<void>{
    await this.productCount.nth(0).locator('a').click();
  }
}
