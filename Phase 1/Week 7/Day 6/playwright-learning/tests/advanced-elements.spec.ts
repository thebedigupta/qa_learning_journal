import { test, expect } from "@playwright/test";

test.describe("Advanced element practice", () => {
  test("upload file on contact page", async ({ page }) => {
    await page.goto("https://automationexercise.com/contact_us");

    await page.getByPlaceholder("Name").fill("Ajay");
    await page.locator('[data-qa="email"]').fill("test@example.com");
    await page.getByPlaceholder("Subject").fill("Test Subject");
    await page.getByPlaceholder("Your Message Here").fill("Test Message");

    const filePath = page.locator('input[type="file"]');
    await filePath.setInputFiles({
      name: "text.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("Test file content"),
    });
    await expect(filePath).toBeAttached();
    // single use pop up and then destory
    page.once("dialog", (dialog) => dialog.accept());
    await page.getByRole("button", { name: "Submit", exact: true }).click();
    await expect(page.locator(".contact-form .alert-success")).toBeVisible();
  });

  test('handle dialog alert on automation exercise',async({page})=>{
    await page.goto("https://automationexercise.com/contact_us")

    await page.getByPlaceholder('Name').fill('Ravi');
    await page.getByRole('textbox',{name : 'Email',exact:true}).fill('test@test.com');
    await page.getByPlaceholder('Subject').fill('Test Subject Exercise');
    await page.getByPlaceholder('Your Message Here').fill('Test message');
    // Single use pop up and then destory
    page.once('dialog',(dialog)=>{dialog.accept()});
    await page.getByRole('button',{name : 'Submit'}).click()
    await expect(page.locator('.contact-form .alert-success')).toBeVisible();
  })
  test('MockAPI response and verify page uses mock data',async({page})=>{
    await page.route('**/*.json',route =>{
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({mocked:true})
      });
    });

    await page.goto('https://saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name: 'Login'}).click();

    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });
});
