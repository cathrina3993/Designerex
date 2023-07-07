export function selectAus() {
  cy.get(
    "#country-modal > .modal-dialog > .modal-content > .modal-body > .JT-modal-content > :nth-child(2)"
  ).should("have.text", "Please select your country");
  //click on the option
 // cy.get(".JT-hotFixbtn").click();
 cy.xpath(`//div[@id='country-modal']//button[@type='button'][normalize-space()='×']`).click() //donot choose any country
}

export function selectUsa() {
  cy.get(
    "#country-modal > .modal-dialog > .modal-content > .modal-body > .JT-modal-content > :nth-child(2)"
  ).should("have.text", "Please select your country");
  //click on the USA
  cy.get(".modal-body > .JT-searchModal-btnGroup > :nth-child(1)").click();
}
