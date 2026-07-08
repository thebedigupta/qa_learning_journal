import { Page } from "@playwright/test";

// automationexercise.com loads third-party ads — block them at network level

export async function blockAds(page: Page): Promise<void> {
  await page.route(
    /googlesyndication|doubleclick|googleads|adservice|popads|adsrvr/,
    (route) => route.abort(),
  );
}

// Handle any dialog that appears (alert/confirm) by auto-accepting

export function autoAcceptDialogs(page: Page): void {
  page.on("dialog", (dialog) => dialog.accept());
}
