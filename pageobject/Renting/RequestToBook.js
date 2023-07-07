export function RequestBooking() {
  // cy.xpath(`//label[normalize-space()='Billing address is same as above']`).click() //click on the checkbox billing address is same as above
  cy.xpath(`//input[@id='cardholder-name']`).type("Sony Tuladhar");
  cy.xpath(`//input[@id='card_number']`).type("4242424242424242");
  cy.xpath(`//input[@id='JT-card-exp-date']`).type("0926");
  cy.xpath(`//input[@id='card-ccv']`).type("123");

  //cy.xpath(`(//input[@id='submitPaymentForm'])[1]`).click()
  cy.xpath(`//div[@class='col-xs-12 JT-checkout-policy-notes']//input[1]`)
    .wait(5000)
    .dblclick();
  // cy.xpath(`//div[@class='col-xs-12 JT-checkout-policy-notes']//input[1]`).dblclick()
  cy.wait(5000);
  cy.get(".modal-body > .text-center > h5").should(
    "have.text",
    "Payment SuccessfulThank you"
  );
}

export function ViewListOfRentingDress() {
  cy.xpath(`//a[normalize-space()='Renting']`).click(); //click on the renting tab
}

export function GotoDetailPage() {
  cy.xpath(`//a[normalize-space()='View Details']`).first().click(); //view detail of the rented dress
  cy.get(".JT-dbRentLend__status-bar").then(($status) => {
    const DisplayStatus = $status.text();
    cy.log(DisplayStatus);
  });
}

export function messageFromDetailPage() {
  cy.xpath(`(//a[normalize-space()='Message'])[1]`).click();
  cy.get("#messageBody").type("Hi, I want to book this dress");
  cy.get(".submit-btn").click(); //click on the submit button
  cy.get(".alert-message-div").should(
    "have.text",
    "Your message has been sent."
  );
}

export function CancelRequest() {
  cy.get(".JT-dbRentLend__cancellation > :nth-child(2) > a").click(); //click on the cancel button
  cy.get(
    "#confirm-cancel-booking-renter > .modal-message > .modal-content > .modal-body > .btn"
  ).click(); //click on the confirm button
  cy.get(".JT-dbRentLend__status-bar").should("have.text", "Cancelled");
}

export function cancelPolicy() {
  cy.xpath(`//a[normalize-space()='View Cancellation Policy']`).click(); //click on the cancellation policy
  cy.get(`.container>h3`).should(
    "have.text",
    "designerex™ terms and conditions"
  );
}


export function CheckCart(){
    
}