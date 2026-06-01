import { test, expect } from '@playwright/test';

test.describe('Advanced Elements Practice', () => {

  test('handle dialog alert on automationexercise', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    
    await page.getByPlaceholder('Your Name').fill('Test User');
    await page.getByPlaceholder('Your Email').fill('test@example.com');
    await page.getByPlaceholder('Subject').fill('Test Subject');
    await page.getByPlaceholder('Your Message Here').fill('Test message');
    
    // Handle the alert that appears on submit
    page.once('dialog', dialog => dialog.accept());
    
    await page.getByRole('button', { name: 'Submit' }).click();
    
    // Assert success message after dialog accepted
    await expect(page.locator('.contact-form .alert-success')).toBeVisible();
  });

});