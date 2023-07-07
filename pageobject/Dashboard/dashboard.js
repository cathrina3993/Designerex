export function viewdashboard(){
    cy.xpath(`//span[@class='JT-userImage JT-userImage-large']//img[@id='profile_image_header']`).click();  //click profile button
    cy.xpath(`//ul[@class='JT-dropdown-menu']//a[@class='JT-dropdown-linkBtn'][normalize-space()='Dashboard']`).click();    //click dashboard in dropdown
    cy.xpath(`//li[@class='dashboard-tab JT-dashboard-tab active']//a[normalize-space()='Dashboard']`).should("have.text",'Dashboard'); //assertion
    cy.xpath(`//p[@class='JT-dashboard-landing__user-payout-head']`).should("have.text",'Your Earnings');   //assertion
    cy.xpath(`//h2[normalize-space()='Last Viewed']`).should("have.text",'Last Viewed');    //assertion
}

export function editprofilefromdashboard(){
    cy.xpath(`//a[@class='JT-dashboard-landing__profile-link'][normalize-space()='Edit Profile']`).click(); //edit profile button
    cy.xpath(`//input[@id='first_name']`).clear().type("Riya");
    cy.xpath(`//input[@class='dashboard_profile_edit_submit JT-btn-primary JT-btn-w150 pull-right']`).click();  //save button
    //cy.xpath(`//p[@class='alert-message-div alert alert-success']`).should("have.text",'Your account has been updated');    //success message assertion
}