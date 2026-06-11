import { Page } from '@playwright/test';

/**
 * Base class for all Page Object classes.
 * This class contains common helper functions, like opening pages and waiting for them to load
 * Other page object classes should inherit from BasePage, and you should not create a BasePage object by itself.
 */
export class BasePage {

  /**
   * @param page - Playwright Page object injected by the test or fixture.
   *               Protected so child classes can use this.page directly.
   */
  constructor(protected page: Page) {}

  /**
   * Navigates to a path relative to the baseURL defined in playwright.config.ts.
   * @param path - Relative path e.g. '/' or '/inventory.html' or '/cart.html'
   * @example
   * await super.goto('/cart.html');
   */
  async goto(path: string = '/'): Promise<void> {
    await this.page.goto(path);
  }

  /**
   * Waits for the page to finish loading its HTML structure.
   * Use after navigation when elements may not be immediately available.
   * @example
   * await this.waitForPageLoad();
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }
}