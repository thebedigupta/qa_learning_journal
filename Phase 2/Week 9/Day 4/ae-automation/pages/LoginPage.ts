import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

interface UserDob {
  day: string;
  month: string;
  year: string;
}

export class LoginPage extends BasePage {
  private readonly loginEmailInput = this.page.locator(
    '[data-qa="login-email"]',
  );
  private readonly loginPasswordInput = this.page.locator(
    '[data-qa="login-password"]',
  );
  private readonly loginButton = this.page.locator('[data-qa="login-button"]');
  private readonly signUpNameInput = this.page.locator(
    '[data-qa="signup-name"]',
  );
  private readonly signUpEmailInput = this.page.locator(
    '[data-qa="signup-email"]',
  );
  private readonly signUpButton = this.page.locator(
    '[data-qa="signup-button"]',
  );
  private readonly logoutButton = this.page.getByRole("link", {
    name: "Logout",
  });
  private readonly continueButton = this.page.locator(
    '[data-qa="continue-button"]',
  );
  private readonly radioButton = this.page.locator("#id_gender1");
  private readonly accountInfoName = this.page.locator('[data-qa="name"]');
  private readonly accountInfoPassword = this.page.locator(
    '[data-qa="password"]',
  );
  private readonly accountInfoDays = this.page.locator('[data-qa="days"]');
  private readonly accountInfoMonths = this.page.locator('[data-qa="months"]');
  private readonly accountInfoYears = this.page.locator('[data-qa="years"]');
  private readonly newsletterCheckbox = this.page.locator("#newsletter");
  private readonly optinCheckbox = this.page.locator("#optin");
  private readonly accountInfoFirstName = this.page.locator(
    '[data-qa="first_name"]',
  );
  private readonly accountInfoLastName = this.page.locator(
    '[data-qa="last_name"]',
  );
  private readonly accountInfoCompany = this.page.locator(
    '[data-qa="company"]',
  );
  private readonly accountInfoAddress = this.page.locator(
    '[data-qa="address"]',
  );
  private readonly accountInfoAddressTwo = this.page.locator(
    '[data-qa="address2"]',
  );
  private readonly accountInfoCountry = this.page.locator(
    '[data-qa="country"]',
  );
  private readonly accountInfoState = this.page.locator('[data-qa="state"]');
  private readonly accountInfoCity = this.page.locator('[data-qa="city"]');
  private readonly accountInfoZipCode = this.page.locator(
    '[data-qa="zipcode"]',
  );
  private readonly accountInfoMobileNo = this.page.locator(
    '[data-qa="mobile_number"]',
  );
  private readonly createAccountButton = this.page.locator(
    '[data-qa="create-account"]',
  );
  private readonly loginErrorMessage = this.page.getByText(
    /Your email or password is incorrect!/i,
  );

  private loggedInUserName(username: string) {
    return this.page.getByText(`Logged in as ${username}`);
  }

  private readonly accountCreatedText = this.page.getByText(/Account Created/i);
  private readonly emailExist = this.page.getByText(
    /Email Address already exist!/i,
  );
  private readonly accountDeleteBtn = this.page.locator(
    'a[href="/delete_account"]',
  );
  private readonly accountDeleteTxt = this.page.getByText(/Account deleted/i);
  private titleRadioBtn(salutation: string) {
    const targetId = salutation.toLowerCase().includes("mrs")
      ? "#id_gender2"
      : "#id_gender1";
    return this.page.locator(targetId);
  }

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.init();
    await this.navigate("login");
  }

  async login(email: string, password: string): Promise<void> {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginError(): Promise<void> {
    await expect(this.page).toHaveURL(/login/i);
    await expect(this.loginErrorMessage).toBeVisible();
  }

  async verifyLoggedIn(username: string): Promise<void> {
    await expect(this.loggedInUserName(username)).toBeVisible();
  }
  async logout(): Promise<void> {
    await this.logoutButton.click();
  }
  async fillSignUpNameAndEmail(name: string, email: string): Promise<void> {
    await this.signUpNameInput.fill(name);
    await this.signUpEmailInput.fill(email);
    await this.signUpButton.click();
  }
  async fillAccountInformation(
    salutation: string,
    name: string,
    password: string,
    dob: UserDob,
  ): Promise<void> {
    await this.titleRadioBtn(salutation).check();
    await this.radioButton.check();
    await this.accountInfoName.fill(name);
    await this.accountInfoPassword.fill(password);

    const { day, month, year } = dob;
    await this.accountInfoDays.selectOption({ label: day });
    await this.accountInfoMonths.selectOption({
      label: month,
    });
    await this.accountInfoYears.selectOption({ label: year });
    await this.newsletterCheckbox.check();
    await this.optinCheckbox.check();
  }

  async fillAddressInformation(
    fname: string,
    lname: string,
    company: string,
    address: string,
    addressTwo: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
    mobile: string,
  ): Promise<void> {
    await this.accountInfoFirstName.fill(fname);
    await this.accountInfoLastName.fill(lname);
    await this.accountInfoCompany.fill(company);
    await this.accountInfoAddress.fill(address);
    await this.accountInfoAddressTwo.fill(addressTwo);
    await this.accountInfoCountry.selectOption({ label: country });
    await this.accountInfoState.fill(state);
    await this.accountInfoCity.fill(city);
    await this.accountInfoZipCode.fill(zipcode);
    await this.accountInfoMobileNo.fill(mobile);
    await this.createAccountButton.click();
  }

  async verifyAccountCreated(): Promise<void> {
    await expect(this.accountCreatedText).toBeVisible();
    await this.continueButton.click();
  }

  async deleteAccount(): Promise<void> {
    await this.accountDeleteBtn.click();
    await expect(this.accountDeleteTxt).toBeVisible();
    await this.continueButton.click();
  }

  async verifyEmailAlreadyExist(): Promise<void> {
    await expect(this.emailExist).toBeVisible();
  }
}
