export function GotoLendingTab(){
    cy.xpath(`//a[normalize-space()='Lending']`).click();      //go to lending tab
}

export function dropdown(){
    cy.xpath(`//li[@id='reservation-type-dropdown-btn']`).click();  //click dropdown
}

export function currentlending(){
    cy.xpath(`//a[normalize-space()='Current Lending Requests']`).click();  //click Current Lending Requests
    cy.xpath(`//div[@class='JT-dashboard-tab-content']//div[2]//div[1]//div[1]//div[1]//div[2]//div[1]//div[1]//div[1]//span[1]`)
    .should("have.text",'Pending Request');
}

export function pastlending(){
    cy.xpath(`//a[normalize-space()='Past Lending Requests']`).click(); //click Past Lending Requests
}

export function expiredlending(){
    cy.xpath(`//a[normalize-space()='Expired Lending Requests']`).click();  //click Expired Lending Requests
    cy.xpath(`//div[@class='JT-dashboard-card-containerBlock col-xs-12']//div[1]//div[1]//div[2]//div[1]//div[1]//div[1]//span[1]`)
    .should("have.text",'Expired');
}

export function declinedlending(){
    cy.xpath(`//a[normalize-space()='Declined Lending Requests']`).click(); //click Declined Lending Requests
    cy.xpath(`//body[1]/div[6]/div[5]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/a[1]`)
    .first()
    .click();
    cy.xpath(`//span[@class='JT-dbRentLend__status-bar']`).should
    ("have.text",'Declined');
    cy.go('back');
}

export function cancelledlending(){
    cy.xpath(`//a[normalize-space()='Cancelled Lending Requests']`).click();    //click Cancelled Lending Requests
    cy.xpath(`//div[@class='JT-dashboard-card-containerBlock col-xs-12']//div[1]//div[1]//div[2]//div[1]//div[1]//div[1]//span[1]`)
    .should("have.text",'Cancelled');
}

export function sortlist(){
    cy.xpath(`//li[@id='reservation-sort-dropdown-btn']`).click();  //click sort dropdown
    cy.xpath(`//a[normalize-space()='Created At (new to old)']`).click();   //sort new to old
    cy.xpath(`//li[@id='reservation-sort-dropdown-btn']`).click();
    cy.xpath(`//a[normalize-space()='Created At (old to new)']`).click();   //sort old to new
    cy.xpath(`//li[@id='reservation-sort-dropdown-btn']`).click();
    cy.xpath(`//a[normalize-space()='Clear']`).click(); //clear all sorts
}