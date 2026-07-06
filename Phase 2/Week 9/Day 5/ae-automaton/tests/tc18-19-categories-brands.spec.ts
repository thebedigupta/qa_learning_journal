import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test('TC18: Naviagte Women and Men Categories',async({page})=>{

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    await homePage.open();
    await expect(page.locator('.left-sidebar')).toBeVisible();
    await page.locator('.panel-title a').first().click();
    await page.locator('.panel-body a').first().click();
    await expect(page.getByRole('heading',{name: /WOMEN.*DRESS/i})).toBeVisible();

    // Now click a men subcategory from the sidebar
    await page.waitForLoadState('domcontentloaded');
    await page.locator('a[href="#Men"]').click();
    await page.locator('a[href="/category_products/3"]').click();
    await expect(page.getByRole('heading',{name: /MEN.*TSHIRTS/i})).toBeVisible();
})