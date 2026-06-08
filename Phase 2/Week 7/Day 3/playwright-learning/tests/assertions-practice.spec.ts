import { test, expect, Page } from '@playwright/test'

test.describe('Saucedemo Login Assertions', () => {

    async function login(page: Page, username = 'standard_user', password = 'secret_sauce') {
        await page.locator('#user-name').fill(username);
        await page.locator('#password').fill(password);
        await page.locator('#login-button').click();
    }

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test('login page has correct title and URL', async ({ page }) => {
        await expect(page).toHaveTitle('Swag Labs');
        await expect(page).toHaveURL(/saucedemo/i);
    });

    test('login form shows all required form elements', async ({ page }) => {
        await expect(page.getByPlaceholder('Username')).toBeVisible();
        await expect(page.getByPlaceholder('Username')).toHaveValue('');
    });

    test('successful login redirects to inventory page', async ({ page }) => {
        await login(page);
        await expect(page).toHaveURL(/inventory/);
    });

    // A negative test for invalid credentials is added in a follow-up commit.
    test('failed login shows error message for invalid credentials', async ({ page }) => {
        await login(page, 'standard_user', 'wrong_password');
        const errorShown = page.locator('h3[data-test="error"]');
        await expect(errorShown).toBeVisible();
        await expect(errorShown).toContainText('Epic sadface');
    });

    test('locked out user sees specific error message', async ({ page }) => {
        await login(page, 'locked_out_user');
        const errorMessage = page.locator('h3[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('locked out');
    });
    test ('empty username shows validation error',async ({page}) => {
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        const errorMessage = page.locator('h3[data-test="error"]');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('Epic sadface');
    }); 
    test('inventory page has correct page count',async({page})=>{
        await login(page);
        await expect(page).toHaveURL(/inventory/i);
        const inventoryItems = page.locator('.inventory_item');
        await expect(inventoryItems).toHaveCount(6);
    })
});