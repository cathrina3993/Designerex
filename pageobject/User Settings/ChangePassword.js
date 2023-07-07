export function changepassword(){
    cy.xpath(`//a[normalize-space()='Change Password']`).click();   //click change password
    cy.xpath(`//h4[normalize-space()='Change Password']`).should("have.text",'Change Password');    //assertion
    //for error message
    cy.xpath(`//input[@id='current_user_password']`).type('a'); //type only one letter
    cy.xpath(`//div[@for='current_user_password']`).should("have.text",'Please enter at least 8 characters.');  //8 characters required error message should be displayed.
    cy.xpath(`//input[@class='profile_edit_submit JT-btn-primary JT-btn-w150']`).click();   //click save button
    cy.xpath(`//div[@for='current_user_new_password_dashboard']`).should("have.text",'This field is required.');    //field required error message should be displayed.
    //to change password successfully
    cy.xpath(`//input[@id='current_user_password']`).type("password");    //old password
    cy.xpath(`//input[@id='current_user_new_password_dashboard']`).type("password");    //new password
    cy.xpath(`//input[@id='current_user_confirm_password']`).type("password");  //confirm password
    cy.xpath(`//input[@class='profile_edit_submit JT-btn-primary JT-btn-w150']`).click();   //click save button
    //cy.xpath(`//p[@class='alert-message-div alert alert-success']`).should("have.text",'Your account has been updated') //check success message
}