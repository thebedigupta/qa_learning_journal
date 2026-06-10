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

  async assertLoginSucess():Promise <void> {
    await expect(this.page,'Login failed - URL should contain /inventory.html').toHaveURL("/inventory.html");
  }

  async assertErrorMessage(expectedMessage: string) :Promise <void>{
    await expect(this.errorMessage,'Error banner should be visible').toBeVisible();
    await expect(this.errorMessage,`Error should contain ${expectedMessage}`).toContainText(expectedMessage);
  }

  async assertLoginPage() :Promise <void>{
    await expect(this.loginButton, `Login button should be visible - user is on login page`).toBeVisible();
  }

  // Add this method to LoginPage.ts
  async assertErrorVisible() :Promise <void>{
    await expect(this.errorMessage,`Error should be vsisble`).toBeVisible();
  }
}
