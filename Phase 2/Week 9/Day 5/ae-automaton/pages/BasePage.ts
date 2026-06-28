import { Page } from "@playwright/test";
import { blockAds, autoAcceptDialogs } from "../utils/helpers";

export class BasePage {
  constructor(protected page: Page) {}

  async init(): Promise<void> {
    await blockAds(this.page);
    autoAcceptDialogs(this.page);
  }

  async navigate(path: string = "") {
    await this.page.goto(`https://www.automationexercise.com/${path}`);
  }

  async clickNavlinks(name: string): Promise<void> {
    await this.page.getByRole("link", { name }).first().click();
  }
}
