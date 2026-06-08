import {test,expect }from '@playwright/test';

test('homepage has correct title',async({page})=>{
    await page.goto('https://automationexercise.com/');

    await expect(page).toHaveTitle('Automation Exercise');
})

test('homepage shows main navigation',async({page})=>{
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('heading',{name : /AutomationExercise/i})).toBeVisible();
})

test('products page loads correctly',async({page})=>{
    await page.goto('https://automationexercise.com/products');
    await expect(page.getByRole('heading',{name: /All Products/i})).toBeVisible();
});


test('login page has email & password feilds',async ({page})=>{
    await page.goto('https://automationexercise.com/login');
    await page.locator('form').filter({hasText: /Login/i}).getByPlaceholder(/Email Address/i);
    await page.locator('form').filter({hasText : /password/i}).getByPlaceholder(/password/i);
    await expect(page.getByRole('button',{name: /Login/i})).toBeVisible();
})