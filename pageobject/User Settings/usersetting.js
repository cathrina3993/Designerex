export function usersettings(){
    cy.xpath(`//span[@class='JT-userImage JT-userImage-large']//img[@id='profile_image_header']`).click();  //click profile button
    cy.xpath(`//ul[@class='JT-dropdown-menu']//a[@class='JT-dropdown-linkBtn'][normalize-space()='Dashboard']`).click();    //click dashboard option in nav bar
    
}
export function assertusersettings(){
    //assertions
    cy.xpath(`//a[normalize-space()='Personal Info']`).should("have.text",'Personal Info');
    cy.xpath(`//a[normalize-space()='Delivery Address']`).should("have.text",'Delivery Address');
    cy.xpath(`//a[normalize-space()='Payment Details']`).should("have.text",'Payment Details');
    cy.xpath(`//a[normalize-space()='ID Verification']`).should("have.text",'ID Verification');
    cy.xpath(`//a[@class='JT-dashboard-userSettings__nav'][normalize-space()='Invite Friends']`).should("have.text",'Invite Friends');
    cy.xpath(`//a[normalize-space()='Designerex Promo Program']`).should("have.text",'Designerex Promo Program');
    cy.xpath(`//a[normalize-space()='Change Password']`).should("have.text",'Change Password');
    cy.xpath(`//label[normalize-space()='3-Hour Delivery']`).should("have.text",'3-Hour Delivery');
}