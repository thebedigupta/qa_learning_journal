import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private readonly usernameField = this.page.locator('[data-test="username"]');
  private readonly passwordField = this.page.locator('[data-test="password"]');
  private readonly loginBtn = this.page.locator('[data-test="login-button"]');
  private readonly errorMessage = this.page.locator('[data-test="error"]');

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginBtn.click();
  }

  // ---------------- Assertion ---------------

  async assertLoginSuccess() {
    expect(this.page).toHaveURL(/inventory/i);
  }

  async assertErrorMessage(){
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText("Epic sadface: Username and password do not match any user in this service"); 
  }

  async asserLoginPage(){
    await expect(this.loginBtn).toBeVisible();
  }
}
