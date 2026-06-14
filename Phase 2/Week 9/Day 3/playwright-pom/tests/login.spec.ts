import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../utils/testData";

test.describe("Login | Authentication scenarios", () => {
  // Test 1 : Valid User Logs in and reaches product page

  test("@smoke valid credentials → redirects to products page", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Users enter his creditionals and sign in
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.assertLoginSucess();
  });

  // Test 2 : Wrong Password Shows error message

  test("@regression wrong password → shows error message", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.invalid.password);
    await loginPage.assertErrorMessage("password");
  });

  // Test 3 : Locked out user see a locked account error

  test("@regression locked account → shows locked error", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.locked.username, users.locked.password);
    await loginPage.assertErrorMessage("locked");
  });
});
