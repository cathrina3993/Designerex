export function viewdeliveryaddress(){
    cy.xpath(`//a[normalize-space()='Delivery Address']`).click();  //click delivery address option
    cy.xpath(`//h4[normalize-space()='Delivery Address']`).should("have.text",'Delivery Address');   //assertion
}

export function validateandsave(){
    //clear field
    // cy.xpath(`//input[@id='user_address_line1']`).clear();
    // cy.xpath(`//input[@id='user_suburb']`).clear();
    // cy.xpath(`//input[@id='user_post_code']`).clear();
    //add fields
    cy.xpath(`//input[@id='user_address_line1']`).clear().type('Bayles St, Parkville VIC 3052, Australia');
    cy.xpath(`//input[@id='user_suburb']`).clear().type('Parkville');
    cy.xpath(`//select[@id='user_state']`).select('Victoria');
    cy.xpath(`//input[@id='user_post_code']`).clear().type('3052');
    //click validate and save button
    cy.xpath(`//input[@value='Validate & Save']`).click();
    //assertion
    cy.xpath(`//div[@id='valid_address']`).should("have.text",'Your address has been saved!');
}