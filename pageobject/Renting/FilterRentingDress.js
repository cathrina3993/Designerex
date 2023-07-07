import * as intercept from "../login/Intercept"
export function clickOnDropDown(){
cy.xpath(`//li[@id='reservation-type-dropdown-btn']`).click() //click on the dropdown icon of filter
}

export function filterRentingByPass(){
    cy.xpath(`//a[normalize-space()='Past Renting Requests']`).click() //filter selecting Past Renting Request
   //intercept.interceptPastFilter()
}



export function filterExpiredRentingDress(){
cy.xpath(`//a[normalize-space()='Expired Renting Requests']`).click() //click on expired
cy.xpath(`(//span[contains(text(),'Expired')])[1]`).should('have.text','Expired')
}

export function filterDeclinedRequest(){
    cy.xpath(`//a[normalize-space()='Declined Renting Requests']`).click({force:true})//click on the decline
    //intercept.interceptDeclinedDress()
}

export function filterCancelledRequest(){
    cy.xpath(`//a[normalize-space()='Cancelled Renting Requests']`).click()//click on the Cancelled option
    cy.xpath(`(//span[contains(text(),'Cancelled')])[1]`).should('have.text','Cancelled')
}

export function SortByDropdown(){
cy.xpath(`//li[@id='reservation-sort-dropdown-btn']`).click()
}

export function sortByNewToOld(){
    cy.xpath(`//a[normalize-space()='Created At (new to old)']`).click()
    cy.xpath(`//li[@id='reservation-sort-dropdown-btn']`).click()
    cy.xpath(`//a[normalize-space()='Clear']`).click()
}

export function sortByOldToNew(){
    cy.xpath(`//a[normalize-space()='Created At (old to new)']`).click()
    cy.xpath(`//li[@id='reservation-sort-dropdown-btn']`).click()
    cy.xpath(`//a[normalize-space()='Clear']`).click()
}

export function FilterByCurrent(){
    cy.xpath(`//a[normalize-space()='Current Renting Requests']`).click() //click on the current renting
    cy.xpath(`//a[@class="JT-btn-default JT-dressShow-message JT_booking_lend_rent_message_link"]`).first().click() //click on the message icon
    cy.get("#messageBody").type("Hi, I want to book this dress"); //type the message
    cy.xpath(`//input[@value='Send']`).click();
    cy.get(".alert-message-div").should(
        "have.text",
        "Your message has been sent."
      );


}