import {test, expect} from '@playwright/test';


test.describe('Screenshot and Tracing Practice',()=>{

    test('take manual screenshot at each checkout step',async ({page})=>{
        await page.goto('https://saucedemo.com/')

        //Screenshot 1 - login page

        await page.screenshot({
            path: 'screenshot/01-login-page.png',
            fullPage: true
        });

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button',{name: 'Login'}).click()

        // Screenshot 2 - Inventory Page
        await page.screenshot({
            path: 'screenshot/02-inventory-page.png',
            fullPage: true
        })

        await page.getByRole('button',{name: 'Add to cart'}).first().click()
        await page.locator('.shopping_cart_badge').click();

        //Screenshot -3 Checkout Page
        await page.screenshot({
            path: 'screenshot/03-Checkout-page.png',
            fullPage: true
        })

        await page.getByRole('button',{name: 'Checkout'}).click();
        await page.getByPlaceholder('First Name').fill('Bedi');
        await page.getByPlaceholder('Last Name').fill('Gupta');
        await page.getByPlaceholder('Zip/Postal Code').fill('274001');
        await page.getByRole('button',{name:'Continue'}).click();

        // Order overview
        await page.screenshot({
            path:'screenshot/04-Order-overview.png',
            fullPage: true,
        })

        await expect(page.getByRole('heading',{name :'Thank you for your order!' })).toBeVisible();
    })
})