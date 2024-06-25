import { url, randomName, randomEmail, signupPassword, randomDay, randomLastName, randomStreet, randomState, randomCity, randomZipCode, randomPhoneNumber, permanentEmail } from "./shared/dataPage"
import selector from "./shared/selectorsPage"
import { login, loginIn } from "./shared/functions";

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July',  'August', 'September', 'October', 'November', 'December'];
const countryArray = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore'];
const randomOption = (array, number) => {
  return array[Math.floor(Math.random()*number)];
}

describe('User Authentication', () => {
  
  beforeEach(() => {
    cy.visit(url)
  })

  const navigateToSignUpLogin = () => {
  cy.contains('Signup / Login').click();
}

  const signUp = (name, email) => {
    navigateToSignUpLogin();
    cy.get(selector.signupName).type(name);
    cy.get(selector.singupEmail).type(email);
    cy.get(selector.signupBtn).click();
}

  it('Sing up with valid credentials', () => {
    signUp(randomName, randomEmail)
    cy.get(selector.signupGender).click();
    cy.get(selector.signupPassword).type(signupPassword);
    // cy.get(selector.singupDateOfBirthDay).select(7);
    cy.get(selector.singupDateOfBirthDay).select(randomDay);
    cy.get(selector.singupDateOfBirthMonth).select(randomOption(monthArray, monthArray.length-1))
    cy.get(selector.singupDateOfBirthYear).select('2000');
    cy.get(selector.signupCheckboxNewsletter).click();
    cy.get(selector.signupcheckboxReceive).click();
    cy.get(selector.signupFirstName).type(randomName);
    cy.get(selector.singupLastName).type(randomLastName);
    cy.get(selector.singupCompany).type('abc');
    cy.get(selector.singupAddress).type(randomStreet);
    cy.get(selector.singupAddress2).type(randomStreet);
    cy.get(selector.singupCountry).select(randomOption(countryArray,countryArray.length-1));
    cy.get(selector.singupState).type(randomState);
    cy.get(selector.signupCity).type(randomCity);
    cy.get(selector.signupZipcode).should('be.empty').type(randomZipCode);
    cy.get(selector.signupMobileNumber).type(randomPhoneNumber);
    cy.get(selector.signupBtnCreateAccount).should('be.visible').click();
    cy.get(selector.signupCreateComment).should('have.text', 'Account Created!');
    cy.get(selector.signupBtnContinue).should('be.visible').click();
  })

  it('Sing up with invalid credentials (error handling)', () => {
    signUp(randomName, permanentEmail)
    cy.contains('Email Address already exist!').should('be.visible');
  })

  it('Log in with valid credentials ', () => {
    login(permanentEmail, signupPassword);
    cy.contains('Features Items').should('be.visible');
    cy.contains(' Logout').should('be.visible');
  })

  it('Login in with invalid credentials (error handling)', () => {
    login(`${randomName}@gmail.com`, signupPassword);
    cy.contains('Your email or password is incorrect!').should('be.visible');
  })

  it('Log out from the account', () => {
    login(permanentEmail, signupPassword);
    cy.contains(' Logout').click();
  })
})
