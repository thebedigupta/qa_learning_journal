import {test}from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {ProductPage} from '../pages/ProductPage';
import {users , products} from '../utils/testData';

test('smoke : login and add product to cart',async({page})=>{
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username,users.standard.password);
    await loginPage.asserLoginSucess()

    await productPage.assertOnProductPage();
    await productPage.addToCartButton(products.backpack);
    await productPage.assertCartCount(1);

    await productPage.addToCartButton(products.bikeLight);
    await productPage.assertCartCount(2);
})