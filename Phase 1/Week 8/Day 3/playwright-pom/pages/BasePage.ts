import { Page } from "@playwright/test";

export class Basepage {
  constructor(protected page: Page) {}

  async await() {
    await this.page.goto("/");
  }

  async waitForPageLoad(){
    await this.page.waitForLoadState('domcontentloaded');
  }
}
