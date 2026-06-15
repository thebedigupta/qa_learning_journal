import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

test("Login-Page print all violations before asserting", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  const results = await new AxeBuilder({ page }).analyze();

  // Print what we have found
  if (results.violations.length > 0) {
    console.log("\n=== Accessibility Violations Found ===");
    results.violations.forEach((v) => {
      console.log(
        `It has ID: ${v.id} and impact ${v.impact} on the system which has description ${v.description}`,
      );
    });
  }

  // Saucedemo has known violations - supress them to make test useful
  const criticalVoilation = results.violations.filter(
    (v) => v.impact === "critical",
  );
  expect(criticalVoilation).toHaveLength(0); // assert zero CRITICAL violations only
});

