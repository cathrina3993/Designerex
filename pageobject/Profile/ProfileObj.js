export function viewprofile(){
    cy.get('.showAbove767.JT-userDetail > .JT-userImage > .JT-profilePic > #profile_image_header').click(); //click profile button
    cy.xpath(`//a[normalize-space()='View Profile']`).click();  //click view profile
    cy.xpath(`//h4[normalize-space()='Bella']`).should("have.text",'Bella');  //assertion
}

export function editprofile(){
    cy.get('.showAbove767.JT-userDetail > .JT-userImage > .JT-profilePic > #profile_image_header').click(); //click profile button
    cy.xpath(`//ul[@class='JT-dropdown-menu']//a[@class='JT-dropdown-linkBtn'][normalize-space()='Edit Profile']`).click(); //click edit profile button
    cy.xpath(`//h3[normalize-space()='Bella']`).should("have.text",'Bella');  //assertion
    //clear fields
    cy.xpath(`//input[@id='first_name']`).clear();
    cy.xpath(`//input[@id='last_name']`).clear();
    //enter data in the fields
    cy.xpath(`//input[@id='first_name']`).type('Bella');
    cy.xpath(`//input[@id='last_name']`).type('Hadid');
    cy.xpath(`//select[@id='user_dob_1i']`).select('1997');
    //click save button
    cy.xpath(`//input[@class='dashboard_profile_edit_submit JT-btn-primary JT-btn-w150 pull-right']`).click();
    //cy.xpath(`//p[@class='alert-message-div alert alert-success']`).should("have.text",'Your account has been updated');    //success message assertion
}

export function shareprofile(){
    cy.xpath(`//img[@class='JT-member-profile-actionBtn-icon']`).click();   //click share button
    cy.xpath(`//a[@id='share-link']`).click();  //click copy link button
}