import {test as base,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {CartPage} from '../pages/CartPage';
import {ProductPage} from '../pages/ProductPage';
import {users} from '../utils/testData';

type customFixtures = {
    loggedInPage : ProductPage

}
export const test = base.extend<customFixtures>({

    loggedInPage:async({page},use)=>{

        // Fixtures 1 : LoggedInPage

        // This logged in page get's product page after login

        const loginPage = new LoginPage(page);
        await loginPage.goto()
        await loginPage.login(users.standard.username,users.standard.password);
        await loginPage.assertLoginSucess();

        // Provieded

        const productPage = new ProductPage(page);
        await use(productPage);

        // TearDown : nothing needed playwright handles page cleaup
    }
});