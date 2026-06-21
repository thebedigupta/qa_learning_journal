import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import * as path from 'path';


export class ContactUsPage extends BasePage {
  private readonly getInTouchText = this.page.locator(".title");
  private readonly formNameInput = this.page.locator('[data-qa="name"]');
  private readonly formEmailInput = this.page.locator('[data-qa="email"]');
  private readonly formSubjectInput = this.page.locator('[data-qa="subject"]');
  private readonly formMessageInput = this.page.locator('[data-qa="message"]');
  private readonly uploadFileInput = this.page.locator('input[type="file"]');
  private readonly submitButton = this.page.locator('[data-qa="submit-button"]');
  private readonly successBanner = this.page.locator(".status.alert-success");
  private readonly homeButton = this.page.locator('[data-qa="home"]');

  constructor(page: Page) {
    super(page);
  }

  async init(): Promise<void> {
    await super.init();
    await this.navigate("contact_us");
  }

  async verifyGetInTouchVisible(): Promise<void> {
    await expect(this.getInTouchText).toBeVisible();
  }

  async fillAndSubmitContactForm(
    name: string,
    email: string,
    subject: string,
    message: string,
  ): Promise<void> {
    await this.formNameInput.fill(name);
    await this.formEmailInput.fill(email);
    await this.formSubjectInput.fill(subject);
    await this.formMessageInput.fill(message);
    await this.uploadFileInput.setInputFiles(
      path.join(__dirname, '../playwright.config.ts')
    );
    this.page.once("dialog", (dialog) => dialog.accept());
    await this.submitButton.click();
  }

  async verifySuccessBannerVisible(): Promise<void> {
    await expect(this.successBanner).toBeVisible();
  }

  async goBackHome(): Promise<void> {
    await this.homeButton.click();
  }
}
