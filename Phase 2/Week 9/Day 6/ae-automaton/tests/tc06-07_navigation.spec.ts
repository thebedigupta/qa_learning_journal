import {test,expect} from '@playwright/test';
import { ContactUsPage } from '../pages/ContactUsPage';

import { testUser,generateUniqueEmail,formfill } from '../utils/testData';
import { HomePage } from '../pages/HomePage';

// TC6 - Contact Us form

test('TC6 - Contact Us form',async ({page})=>{
    const contactPage = new ContactUsPage(page);
    const email = generateUniqueEmail();
    const {name,subject,message} = formfill;
    await contactPage.open();
    await contactPage.verifyFormVisible();
    await contactPage.fillAndSubmitContactForm(name,email,subject,message);
    await contactPage.verifySuccessBannerVisible();
})

// Verify Test Case Page
test('TC7 - Verify Test Case Page',async({page})=>{
   const homePage = new HomePage(page);
   await homePage.open();
   await homePage.verifyHomePageVisible();
   await homePage.clickNavlinks('Test Cases');
   await expect(page).toHaveURL(/test_cases/i);
   await expect(page.locator('.title')).toHaveText(/test cases/i);
})