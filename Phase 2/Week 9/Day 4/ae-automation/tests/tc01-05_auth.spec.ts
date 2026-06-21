import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {generateUniqueEmail,testUser,invalidUser,searchTerms } from '../utlis/testData';


// TC1 - Register User
test('Register new user and delete account',async ({page})=>{
    const loginPage = new LoginPage(page);
    const email = generateUniqueEmail();

    await loginPage.open();
    const {name,password,dob,firstName,lastName,company,address1,address2,country,state,city,zipcode,mobile} = testUser
    await loginPage.fillSignUpNameAndEmail(name ,email);
    await loginPage.fillAccountInformation(name,password,dob);
    await loginPage.fillAddressInformation(firstName,lastName,company,address1,address2,country,state,city,zipcode,mobile);
    await loginPage.verifyAccountCreated();
    await loginPage.deleteAccount();
})

// TC2 - Login with valid credentials
test('Login with valid credentials',async ({page})=>{
    const loginPage = new LoginPage(page);
    const email = generateUniqueEmail()
    const {firstName,lastName,company,address1,address2,country,state,city,zipcode,mobile,name,password,dob} = testUser
    await loginPage.open();
    await loginPage.fillSignUpNameAndEmail(name,email);
    await loginPage.fillAccountInformation(name,password,dob)
    await loginPage.fillAddressInformation(firstName,lastName,company,address1,address2,country,state,city,zipcode,mobile);
    await loginPage.verifyAccountCreated();
    await loginPage.logout();
    await loginPage.login(email,password);
    await loginPage.verifyLoggedIn();
    await loginPage.deleteAccount();
});