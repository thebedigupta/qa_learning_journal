import {test,expect} from '@playwright/test';

test.describe('Find the login button using ALL 5 strategies and verify each one works',()=>{


    test.beforeEach(async({page})=>{
        await page.goto('https://saucedemo.com');
    })

    test('find login button using getByRole',async({page})=>{
        await expect(page.getByRole('button',{name : /login/i})).toBeVisible();
        console.log('GetByRole Search Done');
    })
    
    test('find username field using getByPlaceholder',async ({page})=>{
        await expect(page.getByPlaceholder(/Username/i)).toBeVisible();
        console.log('Find Username Using Placeholder')
    })

    test('Find Username Field Using CSS ID',async({page})=>{
        await expect(page.locator('#user-name')).toBeVisible();
        console.log('CSS By ID ');
    })

    test('find login button using CSS By Attribute',async({page})=>{
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();
        console.log('CSS By Attributes');
    })
    test('find login button using XPath',async({page})=>{
        await expect(page.locator("//input[@id='login-button']")).toBeVisible();
        console.log('Login Button By XPath');
    })
    
})