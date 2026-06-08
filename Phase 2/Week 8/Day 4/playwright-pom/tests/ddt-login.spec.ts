import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

const loginCases = [
  { username: "standard_user", password: "secret_sauce", expectSuccess: true },
  { username: "problem_user", password: "secret_sauce", expectSuccess: true },
  {
    username: "performance_glitch_user",
    password: "secret_sauce",
    expectSuccess: true,
  },
  { username: "wrong_user", password: "secret_sauce", expectSuccess: false },
  { username: "standard_user", password: "wrong_pass", expectSuccess: false },
];

for (const { username, password, expectSuccess } of loginCases) {
  test(`test [${username}] -> ${expectSuccess ? "Sucess" : "Failure"}`, async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(username, password);

    if (expectSuccess) {
      await loginPage.assertLoginSucess();
    } else {
      await loginPage.assertErrorVisible();
    }
  });
}
