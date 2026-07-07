import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

// TC25 — Scroll up using the arrow button
test('TC25: Scroll down then scroll up using arrow button', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.open();
  await homePage.verifyHomePageVisible();

  // Scroll to bottom and verify SUBSCRIPTION is visible
  await homePage.scorlltofooter();
  await expect(page.getByText('SUBSCRIPTION')).toBeVisible();

  // Click the fixed arrow-up button
  await homePage.clickArrowUpButton();

  // Verify page scrolled back to top — hero text is visible
  await expect(
    page.getByRole('heading',{name: 'Full-Fledged practice website for Automation Engineers'})).toBeVisible({ timeout: 10_000 });
});

