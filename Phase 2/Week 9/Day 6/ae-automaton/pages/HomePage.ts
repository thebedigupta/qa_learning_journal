import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.init();
    await this.navigate();
  }

  async verifyHomePageVisible(): Promise<void> {
    await expect(this.page).toHaveURL(/automationexercise/);
  }

  async scorlltofooter(): Promise<void> {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight),
    );
  }

  async scorlltoTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async subscribeWithEmail(email: string): Promise<void> {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight),
    );
    await expect(this.page.getByText("SUBSCRIPTION")).toBeVisible();
    await this.page.fill("#susbscribe_email", `${email}`);
    await this.page.click("#subscribe");
  }
  async clickArrowUpButton(): Promise<void> {
    await this.page.click("#scrollUp");
  }
}
