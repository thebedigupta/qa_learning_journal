import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { parse } from "csv-parse/sync";
import * as fs from "fs";
import * as path from "path";

function loadCSV(filename: string): NegativeCases[] {
  const filePath = path.join(__dirname, "..", "data", filename);
  const content = fs.readFileSync(filePath, "utf-8");
  return parse(content, {
    columns: true,
    skip_empty_lines: true,
  }) as NegativeCases[];
}

interface NegativeCases {
  username: string;
  password: string;
  expectedError: string;
}

test.describe("CSV-Driven Negative Login Suite @regression", () => {
  const negativeCases: NegativeCases[] = loadCSV("negativeLoginData.csv");

  for (const { username, password, expectedError } of negativeCases) {
    test(`Verify error for credentials: UI [${username}]`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(username, password);
      await loginPage.assertErrorMessage(expectedError);
    });
  }
});
