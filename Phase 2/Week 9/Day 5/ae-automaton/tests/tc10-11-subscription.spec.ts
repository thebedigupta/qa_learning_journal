import {test,expect} from '@playwright/test';
import { HomePage } from "../pages/HomePage";
import { CartPage } from '../pages/CartPage';
import {generateUniqueEmail} from '../utils/testData'


// TC10 - Subscription in home page
test(`TC10 - Subscription in home page`,async({page})=>{
    const homePage = new HomePage(page);
    const email = generateUniqueEmail();
    await homePage.open();
    await homePage.verifyHomePageVisible();
    await homePage.scorlltofooter();
    await homePage.subscribeWithEmail(email);
})

//TC11 - Subscription in cart page

test(`TC11 - Subscriptioin in cart page`,async({page})=>{
    const cartPage = new CartPage(page);
    const email = generateUniqueEmail();
    await cartPage.open();
    await cartPage.verifyCartPageDisplayed();
    await cartPage.addEmailToSubscription(email);
    
})