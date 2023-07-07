export function threeHrDelivery() {
  cy.get('.navbar-brand > .JT-whenTop').click()
  //Need #hr delivery or pickup? Click on the Yes Button
  cy.get("#postcodeBtn").click();
  //The popup will display. Assert the text of the popupbox.
  cy.get(".popup-body > span").should("have.text", "3-Hour Delivery Or Pickup");
  //enter your Postcode
  cy.get("#post_code").type("2000");
  //Find the dresses near me
  cy.get("#submit_post_code").click();
  //Display the number of dresses
  cy.get(".JT-search-breadcrumb").then(($txt) => {
    //Store the text of the element in a variable
    const DisplayText = $txt.text();
    cy.log(DisplayText);
  });
}
