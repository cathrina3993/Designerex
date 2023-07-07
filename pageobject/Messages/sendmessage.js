import { faker } from "@faker-js/faker";

export function sendmessagefromtab(){
    cy.xpath(`//textarea[@id='message_body']`).type(faker.lorem.sentence()) //write message
    const Dress = "dress.jpg";
  cy.get("input[type='file'][name='message[attachment]").attachFile(Dress, {
    action: "input",
    force: true,
    wait: 1000,
  }); //upload image
  cy.xpath(`//input[@value='Send']`).click();   //send button
}

export function sendwhilebooking(){
    cy.xpath(`//body/div[@id='search-result-content']/div[@class='JT-searchResult']/div[@class='JT-searchResult-block top-search-padding']/div[@class='JT-searchResult-contentPanel']/div[@id='itemContainer']/div[@id='search_result']/div[2]`).click();
    cy.xpath(`//a[normalize-space()='Message']`).click();
    cy.xpath(`//textarea[@id='messageBody']`).type(faker.lorem.sentence()) //write message
    const Dress = "dress.jpg";
  cy.get("input[type='file'][name='message[attachment]").attachFile(Dress, {
    action: "input",
    force: true,
    wait: 1000,
  }); //upload image
  cy.xpath(`//input[@value='Send']`).click();   //send button
  cy.xpath(`//p[@class='alert-message-div alert alert-success']`).should("have.text",'Your message has been sent.');
}

