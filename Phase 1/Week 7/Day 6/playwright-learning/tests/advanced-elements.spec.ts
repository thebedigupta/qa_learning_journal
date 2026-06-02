import {test,expect} from '@playwright/test';

test.describe('Advanced element practice',()=>{

    test('handle dialog alert on automation exercise',async({page})=>{
        await page.goto('https://automationexercise.com/contact_us');

        await page.getByPlaceholder('Name').fill('Ajay');
        await page.locator('[data-qa="email"]').fill('test@example.com');
        await page.getByPlaceholder('Subject').fill('Test Subject');
        await page.getByPlaceholder('Your Message Here').fill('Test Message');
        page.once('dialog',dialog=> dialog.accept())
        const filePath = page.locator('input[type="file"]');
        await filePath.setInputFiles({
          name : 'text.txt',
          mimeType:'text/plain',
          buffer:Buffer.from('Test file content')
        })
        await expect(filePath).toBeAttached();
        await page.getByRole('button',{name :'Submit',exact:true}).click();
    })
})