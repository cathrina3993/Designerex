import { faker } from '@faker-js/faker';


export function registerAccount(){
    cy.get(':nth-child(3) > .JT-main-menu-itemlink').click() //click on the join to register the account
    cy.get('#user_first_name').type(faker.name.firstName()) //Enter firstname
    cy.get('#user_last_name').type(faker.name.lastName())   //enter lastname
    cy.get('#user-email1').type(faker.internet.email())     //enter email
    cy.get('#user_password1').type('Password')  //enter password
    cy.get('#user_dob_3i').select("1")  //select date 
    cy.get('#user_dob_2i').select("3")  //select month
    cy.get('#user_dob_1i').select("1997")   //select year
    cy.get('#RecaptchaField3 > [style="width: 304px; height: 78px;"] > div > iframe').click()

}