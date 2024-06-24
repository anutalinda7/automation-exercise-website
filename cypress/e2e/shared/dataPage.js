import {faker} from '@faker-js/faker'
export const url = 'https://www.automationexercise.com/';
export const urlCart = 'https://www.automationexercise.com/view_cart';
export const mainBtn = [' Home', ' Products', ' Cart', ' Signup / Login', ' Test Cases', ' API Testing', ' Video Tutorials', ' Contact us'];
export const randomName = faker.person.firstName();
export const randomLastName = faker.person.lastName();
export const randomEmail = faker.internet.email();
export const permanentEmail = 'Doris78@yahoo.com';
export const signupPassword = 'Password123';
export const randomDay = faker.datatype.number({min: 1, max: 28});
export const randomStreet = faker.location.street();
export const randomState = faker.location.state();
export const randomCity = faker.location.city();
export const randomZipCode = faker.location.zipCode();
export const randomPhoneNumber = faker.phone.number();
export const searchProductName = 'Sleeveless Dress';



