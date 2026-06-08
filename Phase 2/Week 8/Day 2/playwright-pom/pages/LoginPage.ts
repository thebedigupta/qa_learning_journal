import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.locator('[data-test="username"]');
  readonly passwordinput = this.page.locator('[data-test= "password"]');
  readonly loginButton = this.page.locator('[data-test="login-button"]');
  readonly errorMessage = this.page.locator('[data-test="error"]');

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordinput.fill(password);
    await this.loginButton.click();
  }

  async asserLoginSucess() {
    await expect(this.page).toHaveURL("/inventory.html");
  }

  async assertErrorMessage(expectedText: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedText);
  }

  async assertLoginPage() {
    await expect(this.loginButton).toBeVisible();
  }
}
