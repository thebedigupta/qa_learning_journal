import {test,expect} from '@playwright/test';

test.describe('SauceDemo Complete Checkout flow',()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://saucedemo.com/')
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        const loginBtn = page.locator('#login-button');
        await loginBtn.click();
        await expect(page).toHaveURL(/inventory/i);
        console.log('Now you are logged in and in the inventory page');
    })
})