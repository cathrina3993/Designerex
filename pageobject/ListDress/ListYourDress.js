import { faker } from "@faker-js/faker";
import "cypress-file-upload";

export function listMyDressStepOne() {
  cy.get(":nth-child(6) > .btn").click(); //click on List Your Dress Option
  cy.get("#edit_designer_brand").type(faker.company.name()); //type the designer brand
  cy.get("#dress_dress_name").type(faker.name.firstName()); //type dsigner name
  cy.get("#JT_dress_type_input").click(); //click to select dress type
  cy.get(":nth-child(1) > .dress-type-checkbox-clicked").click(); //select dress type 1
  cy.get(":nth-child(5) > .dress-type-checkbox-clicked").click(); //select second dress type
  cy.get("#listdress_size").click(); //click on the dropdown icon to select size
  cy.get(":nth-child(3) > .AU").click(); //select the size
  cy.get("#dress_colour").select("Red"); //Colour Category
  cy.get("#dress_description").type(faker.lorem.sentence()); // details and style notes
  cy.get("#additional-step1 > .JT-listDresstab-collapsible").click(); //click to Add advance details
  cy.get("#dress_fit").select("True to size"); //select the fit type
  cy.get("#dress_size_fit_notes").type(faker.lorem.sentence());
  cy.get("#tab_1").click(); //Click on the next button
}

export function listMyDressStepTwo() {
  cy.get("#dress_rrp").clear().type(`3000`); //type the recommended retail price
  cy.get("#dress_rental_price").clear().type("1000");
  cy.get("#tab_2").click(); //Click on the next button
}

export function listMyDressStepThree() {
  cy.get(
    ":nth-child(1) > .JT-listDresstab-third-additional > .JT-listDresstab-additionalSteps > .JT-listDresstab-thirdSlide > .JT-listDresstab-collapsible"
  ).click(); //cleaning option
  cy.get(
    "#effect-step2 > .cleaning_option > .JT-checkbox > :nth-child(3) > label"
  ).click(); //select the cleaning option as user have return clean
  cy.get(
    ":nth-child(2) > :nth-child(2) > .JT-listDresstab-additionalSteps > .JT-listDresstab-thirdSlide > .JT-listDresstab-collapsible"
  ).click(); //click to select shipping option
  cy.get(
    "#effect-step3 > .cleaning_option > .JT-checkbox > .JT-listDresstab-checkBlock > .JT-checkbox__field > label"
  ).click(); //select enter your shipping cost
  cy.get("#dress_shipping_cost").clear().type("50"); //enter the shipping charge
  cy.get("#dress_shipping_return_details").clear().type(faker.lorem.sentence()); //enter the shipping and return details
  cy.get(
    ":nth-child(2) > .JT-listDresstab-content > .JT-listDresstab-third-additional > .JT-listDresstab-additionalSteps > .JT-listDresstab-thirdSlide > .JT-listDresstab-collapsible"
  ).click(); //click for the advance detaik
  cy.get("#tab_3").click(); //click on the next step\
}

export function listMyDressStepFour() {
  const RedGown = "gownred.jpg";
  cy.get("input[type='file'][name='image[image]']").attachFile(RedGown, {
    action: "input",
    force: true,
    wait: 1000,
  }); //upload image
  cy.get('.spin-center > p').should("be.visible")
  .then(() => {
    cy.wait(10000)
    });
  cy.get('[value="Preview Listing"]').click()  //preview listing
  cy.get('.JT-dressPreview-content > h4').should('have.text','Preview Your Listing') //assert after preview listing
  cy.get('#edit_dress > .JT-btn-default').click() //click on the edit listing to go back to the previous page
    cy.get('[value="Save & Publish"]').click() // click save and publish button
  cy.xpath(`//h4[contains(text(),'Your Dress has been')]`).should(
    "have.text",
    "Your Dress has been  Successfully Listed!"
  ); //assert after listing done successfully
}
