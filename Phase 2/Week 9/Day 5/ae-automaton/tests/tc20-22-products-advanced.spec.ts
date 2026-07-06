import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import {testUser,generateUniqueEmail} from '../utils/testData';

test('TC20: Search Product, add to cart, verify cart after login',async({page})=>{

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page)
    const cartPage = new CartPage(page);
    const email = generateUniqueEmail();

    await productPage.open();
    await productPage.searchProduct('Top');
    await productPage.verifySearchResultVisible();

    // Add first searched product to cart
    await page.waitForLoadState('networkidle');
    await productPage.hoverAndAddToCart(0);
    await productPage.continueShopping();

    // View cart before login
    await cartPage.open();
    await cartPage.verifyCartPageDisplayed();
    await cartPage.verifyProductCount(1);

    // Register and login 

    await loginPage.open();
     await loginPage.fillSignUpNameAndEmail(testUser.name, email);
      await loginPage.fillAccountInformation(
        testUser.title,
        testUser.name,
        testUser.password,
        testUser.dob,
      );
      await loginPage.fillAddressInformation(
        testUser.firstName,
        testUser.lastName,
        testUser.company,
        testUser.address1,
        testUser.address2,
        testUser.country,
        testUser.state,
        testUser.city,
        testUser.zipcode,
        testUser.mobile,
      );
      await loginPage.verifyAccountCreated();

      // Return to cart - product should still be there
      await cartPage.open();
      await cartPage.verifyCartPageDisplayed();
      await cartPage.verifyProductCount(1);

      await loginPage.deleteAccount();
})