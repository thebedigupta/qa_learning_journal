import { Page, expect } from "@playwright/test";

import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private readonly usernameInput = this.page.locator('[data-test="username"]');
  private readonly passwordInput = this.page.locator('[data-test="password"]');
  private readonly loginButton = this.page.locator(
    '[data-test="login-button"]',
  );
  private readonly errorMessage = this.page.locator('[data-test="error"]');

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // ----------- Assertions ------------

  async assertLoginSucess() {
    await expect(this.page).toHaveURL("/inventory.html");
  }

  async assertErrorMessage(expectedMessage: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedMessage);
  }

  async assertLoginPage() {
    await expect(this.loginButton).toBeVisible();
  }

  // Add this method to LoginPage.ts
  async assertErrorVisible() {
    await expect(this.errorMessage).toBeVisible();
  }
}
