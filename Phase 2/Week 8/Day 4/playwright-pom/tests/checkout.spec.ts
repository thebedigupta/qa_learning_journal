import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import {CheckoutPage} from '../pages/CheckoutPage';
import {users,products,checkoutInfo} from '../utils/testData';


// Test 5 End to End ---------------------------------

test('User Completes full checkout flow sucessfully',async({page})=>{
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // User login and direct to product page

    await loginPage.goto();
    await loginPage.login(users.standard.username,users.standard.password);
    await loginPage.assertLoginSucess();

    // Adding products in the cart 
    await productPage.goto();
    await productPage.addProductsToCart(products.backpack);
    await productPage.cartCount(1);

    await productPage.addProductsToCart(products.bikeLight);
    await productPage.cartCount(2);
    await productPage.goToCart();

    // At checkout verifying what user added 

    await cartPage.goto();
    await cartPage.assertItemInCart(products.backpack);
    await cartPage.assertItemInCart(products.bikeLight);
    await cartPage.proceedToCheckout();

    // User fill it's details and complete payment 
    await checkoutPage.OnCheckoutStepOne();
    await checkoutPage.fillShippingInfo(checkoutInfo.firstName,checkoutInfo.lastName,checkoutInfo.zip);
    await checkoutPage.assertOnCheckoutStepTwo();
    await checkoutPage.finishOrder();

    // Assert Order Completed
    await checkoutPage.assertOrderStatus();

})