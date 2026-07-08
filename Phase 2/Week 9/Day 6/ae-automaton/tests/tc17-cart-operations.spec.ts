import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

// TC17 - Remove Products from cart

test('TC17: Remove Product from cart',async({page})=>{
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await productPage.quickAddFirstProductToCart()
    await cartPage.open();
    await cartPage.verifyProductCount(1);
    await cartPage.removeFirstProduct();
    await cartPage.verifyCartIsEmpty();
})
