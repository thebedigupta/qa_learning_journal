import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactUsPage extends BasePage {
  private readonly formNameInput = this.page.locator('[data-qa="name"]');
  private readonly formEmailInput = this.page.locator('[data-qa="email"]');
  private readonly formSubjectInput = this.page.locator('[data-qa="subject"]');
  private readonly formMessageInput = this.page.locator('[data-qa="message"]');
  private readonly submitButton = this.page.locator(
    '[data-qa="submit-button"]',
  );
  private readonly successBanner = this.page.locator(".status.alert-success");
  private readonly homeButton = this.page.getByRole("link", { name: "Home" });

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await super.init();
    await this.navigate("contact_us");
  }

  async verifyFormVisible(): Promise<void> {
    await expect(this.formEmailInput).toBeVisible();
  }

  async fillAndSubmitContactForm(
    name: string,
    email: string,
    subject: string,
    message: string,
  ): Promise<void> {
    // 1. Fill the form fields first
    await this.formNameInput.fill(name);
    await this.formEmailInput.fill(email);
    await this.formSubjectInput.fill(subject);
    await this.formMessageInput.fill(message);
    await this.submitButton.click();
  }

  async verifySuccessBannerVisible(): Promise<void> {
    await expect(this.successBanner).toBeVisible();
  }

  async goBackHome(): Promise<void> {
    await this.homeButton.click();
  }
}
