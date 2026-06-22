import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import {
  generateUniqueEmail,
  testUser,
  invalidUser,
} from "../utlis/testData";

// TC1 - Register User
test("TC1 - Register new user and delete account", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const email = generateUniqueEmail();

  await loginPage.open();
  const {
    title,
    name,
    password,
    dob,
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobile,
  } = testUser;
  await loginPage.fillSignUpNameAndEmail(name, email);
  await loginPage.fillAccountInformation(title,name, password, dob);
  await loginPage.fillAddressInformation(
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobile,
  );
  await loginPage.verifyAccountCreated();
  await loginPage.deleteAccount();
});

// TC2 - Login with valid credentials
test("TC2 - Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const email = generateUniqueEmail();
  const {
    title,
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobile,
    name,
    password,
    dob,
  } = testUser;
  await loginPage.open();
  await loginPage.fillSignUpNameAndEmail(name, email);
  await loginPage.fillAccountInformation(title,name, password, dob);
  await loginPage.fillAddressInformation(
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobile,
  );
  await loginPage.verifyAccountCreated();
  await loginPage.verifyLoggedIn(name);
  await loginPage.deleteAccount();
});

//TC3 - Login with Incorrect credentials (DDT: 3 invalid datasets)

test.describe("TC3 - Login with invalid credentials", () => {
  const invalidDatasets = [
    { email: "wrong1@test.com", password: "badpass1" },
    { email: "notexist@test.com", password: "badpass2" },
    { email: invalidUser.email, password: invalidUser.password },
  ];

  for (const dataset of invalidDatasets) {
    test(`Invalid login: ${dataset.email}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.open();
      const { email, password } = dataset;
      await loginPage.login(email, password);
      await loginPage.verifyLoginError();
    });
  }
});

// TC4 - Logout User

test("TC5 - Logout test user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const email = generateUniqueEmail();
  await loginPage.open();
  const {
    title,
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobile,
    name,
    password,
    dob,
  } = testUser;
  await loginPage.fillSignUpNameAndEmail(name, email);
  await loginPage.fillAccountInformation(title,name, password, dob);
  await loginPage.fillAddressInformation(
    firstName,
    lastName,
    company,
    address1,
    address2,
    country,
    state,
    city,
    zipcode,
    mobile,
  );
  await loginPage.verifyAccountCreated();
  await loginPage.verifyLoggedIn(firstName);
  await loginPage.logout();
  await expect(page).toHaveURL(/login/);

  // Cleanup — log back in to delete account
  await loginPage.login(email, password);
  await loginPage.deleteAccount();
});

// TC5 - Register with existing email

test('TC5 - Register with existing email',async({page})=>{
  const loginPage = new LoginPage(page);
  const email = generateUniqueEmail();
  const {title,firstName,lastName,company,address1,address2,country,state,city,zipcode,mobile,name,password,dob} = testUser
  await loginPage.open();
  await loginPage.fillSignUpNameAndEmail(name,email);
  await loginPage.fillAccountInformation(title,name,password,dob);
  await loginPage.fillAddressInformation(firstName,lastName,company,address1,address2,country,state,city,zipcode,mobile)
  await loginPage.verifyAccountCreated();
  await loginPage.logout();
  await loginPage.open()
  await loginPage.fillSignUpNameAndEmail(name,email);
  await loginPage.verifyEmailAlreadyExist();
})
