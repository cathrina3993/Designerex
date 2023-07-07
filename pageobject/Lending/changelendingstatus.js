export function acceptlending(){
    cy.xpath(`//a[normalize-space()='Accept']`)
    .first()
    .click();    //click accept button
    cy.xpath(`//strong[normalize-space()='Success! You Have Accepted a Booking']`).should(
        "have.text",
        'Success! You Have Accepted a Booking')
    cy.xpath(`//div[@id='accepted-booking-lender']//i[@class='fa fa-times']`).click();  //click close button
}

export function declinelending(){
    cy.get(':nth-child(1) > .JT-dashboard-card > .JT-dashboard-card-panelBody > .JT-dashboard-card__info > .JT-dashboard-card__btnGroup > .JT-btn-default')
    .first()
    .click();   //click decline button
    cy.xpath(`//p[normalize-space()='You Have Declined the request.']`).should
    ("have.text",'You Have Declined the request.');  //assertion
    cy.xpath(`//a[normalize-space()='OK']`).click();    //click ok button
}