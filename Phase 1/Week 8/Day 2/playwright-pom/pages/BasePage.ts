import {Page} from '@playwright/test';

export class BasePage {

    constructor(protected page : Page){}

    async goto(){
        await this.page.goto('/');
    }

    async waitForPageLoad(){
        await this.page.waitForLoadState('domcontentloaded');
    }

}