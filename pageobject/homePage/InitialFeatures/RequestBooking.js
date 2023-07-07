import { faker } from "@faker-js/faker";

export function requestToBookStepOne() {
  cy.xpath(`(//div[@class="JT-card panel"])[1]`).click();
  //cy.get("#search_result > :nth-child(3)").click(); //click on the specific dress
  cy.get("#reservation_size").then(($sizeoption) => {
    //select the specific size from multiple options
    if ($sizeoption.is(":visible")) {
      cy.get("#reservation_size").select("12"); //click on the dropdown option
    } else {
      cy.log("There is only one size of the dress");
    }
  });
  cy.xpath(`//div[@id='disabled_dates']`).then(($disabledatecount) => {
    const datecount = $disabledatecount.text();
    if (datecount.length > 0) {
 
  cy.get('.calender_field').within(() => {
    // Click on the date picker input field to open the date picker
    cy.get('.delivery_datepicker').click();
  
    // Find the container of the date elements
    cy.xpath(`//div[@class="datepicker datepicker-dropdown dropdown-menu datepicker-orient-left datepicker-orient-bottom"]`).then(($dateContainer) => {
      // Get all the visible and selectable date elements
      const $dateElements = $dateContainer.find('.day:not(.disabled)');
  
      // Get the number of selectable dates
      const numDates = $dateElements.length;
  
      // Generate a random index within the range of selectable dates
      const randomIndex = Cypress._.random(0, numDates - 1);
  
      // Get the randomly selected date element
      const $randomDateElement = $dateElements.eq(randomIndex);
  
      // Get the date value from the data attribute or text content
      //const selectedDate = $randomDateElement.data('date') || $randomDateElement.text();
  
      // Click on the randomly selected date
      cy.wrap($randomDateElement).click({force:true});
    });
  
 
  });
  
}
else{
  cy.get("#reservation_target_date_selector").click(); //click on the reservation target selector
  cy.get( ".datepicker-days > .table-condensed > thead > :nth-child(2) > .next" ).click(); //click on the next
 cy.xpath(`//td[normalize-space()='21']`).click({force:true}).wait(5000); //select the specific date
}
})
 cy.get("#reservation_delivery_and_return_type").select("Send to me by post",{force:true}).wait(5000);
  cy.get(".JT-dressShow-btnGroup > .JT-btn-primary").click({force:true}); //request to book button
}

export function requestToBookStepTwo() {
  cy.xpath(`//input[@id='first_name']`).type(faker.name.firstName());
  cy.xpath(`//input[@id='last_name']`).type(faker.name.lastName());
  const email = faker.internet.email(); //type email and confirm email
  cy.writeEmailUsingFaker(email); //function called from command.js file
  cy.xpath(`//input[@id='password_new']`).type("passsword");

  cy.xpath(`//select[@id='user_birthdate_3i']`).select("5");
  cy.xpath(`//select[@id='user_birthdate_2i']`).select("March");
  cy.xpath(`//select[@id='user_birthdate_1i']`).select("1997");
 
}

export function requestToBookStepThree(){
  cy.xpath(`//input[@id='mobileNumber']`).type("61489921018");
  cy.xpath(` //input[@id='address_line1']`).type("Hatmarket");
  cy.xpath(`//input[@id='suburb']`).type("Haymarket");
  cy.xpath(`//select[@id='state']`).select("NSW");
  cy.xpath(`(//input[@id='post_code'])[1]`).type(`2000`);
  cy.xpath(`//input[@id='cardholder-name']`).type("Sujan Sharma");
  cy.xpath(`//input[@id='card_number']`).type('4242424242424242')
  cy.xpath(`//input[@id='JT-card-exp-date']`).type("0926");
  cy.xpath(`//input[@id='card-ccv']`).type("123");
  //cy.get("#validate_address").click();
  cy.xpath(`(//input[@id='submitPaymentForm'])[1]`).click()
  cy.get('.modal-body > .text-center > h5').should('have.text',"Payment SuccessfulThank you")
 // cy.get('#md-message > .modal-content > .modal-body > .text-center > :nth-child(2)').should('have.text','Your booking request number is 3182 andYou will receive a response within 24 hours.')
  cy.get('.modal-body > .text-center > :nth-child(3)').should('have.text','In the meantime, to increase the chance of your request being accepted, please verify your ID')
  cy.get('#payment-successful > #md-message > .modal-content > .modal-header > .close').click({force:true})
}
