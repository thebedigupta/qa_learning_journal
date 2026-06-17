import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { testUser } from "../utlis/testData";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.init();
    await this.navigate();
  }

  async login(email: string, password: string): Promise<void> {
    await this.page.fill('[data-qa="login-email"]', `${email}`);
    await this.page.fill('[data-qa="login-password"]', `${password}`);
    await this.page.click('[data-qa="login-button"]');
  }

  async verifyLoginError(): Promise<void> {
    await expect(this.page).toHaveURL(/login/i);
    await expect(
      this.page.getByText("Your email or password is incorrect!"),
    ).toBeVisible();
  }

  async verifyLoggedIn(): Promise<void> {
    await expect(this.page.getByText(`Logged in as ${testUser.name}`)).toBeVisible();
  }
  async logout(): Promise<void> {
    await this.page.getByRole("link", { name: "Logout" }).click();
  }
  async fillSignUpNameAndEmail(name: string, email: string): Promise<void> {
    await this.page.fill('[data-qa="signup-name"]', `${name}`);
    await this.page.fill('[data-qa="signup-email"]', `${email}`);
    await this.page.click('[data-qa="signup-button"]');
  }
  async fillAccountInformation(name: string, password: string): Promise<void> {
    await this.page.check("#id_gender1");
    await this.page.fill('[data-qa="name"]', `${name}`);
    await this.page.fill('[data-qa="password"]', `${password}`);
    await this.page.locator('[data-test="days"]').selectOption({ label:  `${testUser.dob.day}` });
    await this.page
      .locator('[data-test="months"]')
      .selectOption({ label: `${testUser.dob.month}` });
    await this.page
      .locator('[data-test="years"]')
      .selectOption({ label: `${testUser.dob.years}` });
    await this.page.click("#newsletter");
    await this.page.click("#optin");
  }

  async fillAddressInformation(
    fname: string,
    lname: string,
    company: string,
    address: string,
    state: string,
    city: string,
    zipcode: string,
    mobile: string,
  ): Promise<void> {
    await this.page.fill('[data-qa="first_name"]', `${fname}`);
    await this.page.fill('[data-qa="last_name"]', `${lname}`);
    await this.page.fill('[data-qa="company"]', `${company}`);
    await this.page.fill('[data-qa="address"]', `${address}`);
    await this.page.fill('[data-qa="address2"]', `${address}`);
    await this.page
      .locator('[data-qa="country"]')
      .selectOption({ label: "India" });
    await this.page.fill('[data-qa="state"]', `${state}`);
    await this.page.fill('[data-qa="city"]', `${city}`);
    await this.page.fill('[data-qa="zipcode"]', `${zipcode}`);
    await this.page.fill('[data-qa="mobile_number"]', `${mobile}`);
    await this.page.click('[data-qa="create-account"]');
  }

  async verifyAccountCreated(): Promise<void> {
    await expect(this.page.getByText('Account Created')).toBeVisible();
    await this.page.getByRole('button',{name : 'Continue'}).click();
  }

  async deleteAccount():Promise<void>{
    await expect(this.page.getByText('Account deleted')).toBeVisible();
    await this.page.locator('[data-qa="continue-button"]').click();
  }

  async verifyEmailAlreadyExist():Promise<void>{
    await expect(this.page.getByText('Email Address already exist!')).toBeVisible()
  }
}
