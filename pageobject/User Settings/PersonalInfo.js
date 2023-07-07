export function viewpersonalinfo(){
    cy.xpath(`//a[normalize-space()='Personal Info']`).click(); //click personal info option
}

export function editperonalinfo(){
    const Profilepic = "Profile.jpg";
  cy.get(`input[type='file'][name='user[avatar]`).attachFile(Profilepic, {
    action: "input",
    force: true,
    wait: 1000,
  }); //upload image
  cy.wait(10000)
    //clear and input fields
    //clear
    cy.xpath(`//input[@id='first_name']`).clear();
    cy.xpath(`//div[@for='first_name']`).should("have.text",'This field is required.'); //check error message
    cy.xpath(`//input[@id='first_name']`).type('Riya'); //enter firstname
    cy.xpath(`//input[@id='last_name']`).clear().type('Tuladhar');  //clear and enter lastname
    cy.xpath(`//select[@id='user_dob_1i']`).select('1995'); //change DOB
    //click save button
    cy.xpath(`//input[@class='dashboard_profile_edit_submit JT-btn-primary JT-btn-w150 pull-right']`).wait(5000).click().wait(3000);
    //cy.xpath(`//p[@class='alert-message-div alert alert-success']`).should("have.text",'Your account has been updated');    //success message assertion
}