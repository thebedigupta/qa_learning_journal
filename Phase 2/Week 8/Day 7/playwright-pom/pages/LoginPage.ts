import { Page, expect } from "@playwright/test";

import { BasePage } from "./BasePage";

/**
 * Page Object for the Saucedemo login page.
 * URL : https://www.saucedemo.com/
 * Handles login form interactions and authentication state assertion.
 */

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

  /**
   * Navigates to the Saucedemo login page (root URL).
   * @example
   * await loginPage.goto();
   */

  async goto() {
    await this.page.goto("/");
  }

  /**
   * Fills in the username and password fields and clicks the Login button.
   * Does not assert the result — call assertLoginSuccess() or assertErrorMessage() after.
   * @param username - Saucedemo username e.g. 'standard_user'
   * @param password - Saucedemo password e.g. 'secret_sauce'
   * @example
   * await loginPage.login('standard_user', 'secret_sauce');
   */

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // ----------- Assertions ------------

  /**
   * Asserts that login was successful by checking the URL contains '/inventory'.
   * Call this after login() for happy-path tests.
   * @example
   * await loginPage.assertLoginSuccess();
   */

  async assertLoginSucess():Promise <void> {
    await expect(this.page,'Login failed - URL should contain /inventory.html').toHaveURL("/inventory.html");
  }

  /**
   * Asserts that the error banner is visible and contains the expected message.
   * Use for both invalid credentials and locked account scenarios.
   * @param expectedText - Substring that the error message should contain
   * @example
   * await loginPage.assertErrorMessage('Username and password do not match');
   * await loginPage.assertErrorMessage('Sorry, this user has been locked out');
   */

  async assertErrorMessage(expectedMessage: string) :Promise <void>{
    await expect(this.errorMessage,'Error banner should be visible').toBeVisible();
    await expect(this.errorMessage,`Error should contain ${expectedMessage}`).toContainText(expectedMessage);
  }

   /**
   * Asserts the login button is visible, confirming the user is still on the login page.
   * Useful for verifying failed login does not redirect.
   * @example
   * await loginPage.assertOnLoginPage();
   */

  async assertLoginPage() :Promise <void>{
    await expect(this.loginButton, `Login button should be visible - user is on login page`).toBeVisible();
  }

    /**
   * Asserts that the red error banner is visible without checking specific text.
   * Use in DDT negative tests where exact message varies per row.
   * @example
   * await loginPage.assertErrorVisible();
   */

  // Add this method to LoginPage.ts
  async assertErrorVisible() :Promise <void>{
    await expect(this.errorMessage,`Error should be vsisble`).toBeVisible();
  }
}
