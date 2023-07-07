export function viewpaymentdetails(){
    cy.xpath(`//a[normalize-space()='Payment Details']`).click();   //click payment details
}

export function editpaymentdetails(){
    cy.get(`#JT_edit_payout_details>.fa`).then(($editbutton) => {
        if ($editbutton===null) {
            cy.xpath(`//input[@id='payout_account_name']`).type('Riya');
            cy.xpath(`//input[@id='payout_account_number']`).type('11111');
            cy.xpath(`//input[@id='payout_bsb']`).type('1');
            cy.xpath(`//form[@id='user_payout_edit_form']//input[@name='commit']`).click(); //success message
            cy.xpath(`//p[@class='alert-message-div alert alert-success']`).should("have.text",'Your account has been updated')  

        } else {
            cy.xpath(`//a[@id='JT_edit_payout_details']//i[@class='fa fa-pencil']`).click(); 
            cy.wait(3000)
            cy.xpath(`//a[@id='JT_edit_payout_details']//i[@class='fa fa-pencil']`).click();    //clcik edit button
            cy.xpath(`//h4[normalize-space()='Payment Details']`).should("have.text",'Payment Details');    //assertion
            cy.xpath(`//h4[normalize-space()='Payout Details']`).should("have.text",'Payout Details');  //assertion
            cy.xpath(`//input[@id='payout_account_name']`).clear().type('Bimba');    //edit name field
            cy.xpath(`//form[@id='user_payout_edit_form']//input[@name='commit']`).click(); //click save button
            cy.xpath(`//p[@class='alert-message-div alert alert-success']`).should("have.text",'Your account has been updated')  
        }
    })
    // cy.xpath(`//input[@id='payout_account_name']`).then(($accountname) => {
    //     if ($accountname.is(':visible')) {
    //         cy.xpath(`//input[@id='payout_account_name']`).type('Riya');
    //         cy.xpath(`//input[@id='payout_account_number']`).type('11111');
    //         cy.xpath(`//input[@id='payout_bsb']`).type('1');
    //         cy.xpath(`//form[@id='user_payout_edit_form']//input[@name='commit']`).click();
    //     }
    //     else{
    //         cy.xpath(`//a[@id='JT_edit_payout_details']//i[@class='fa fa-pencil']`).click(); 
    //         cy.wait(3000)
    //         cy.xpath(`//a[@id='JT_edit_payout_details']//i[@class='fa fa-pencil']`).click();    //clcik edit button
    //         cy.xpath(`//h4[normalize-space()='Payment Details']`).should("have.text",'Payment Details');    //assertion
    //         cy.xpath(`//h4[normalize-space()='Payout Details']`).should("have.text",'Payout Details');  //assertion
    //         cy.xpath(`//input[@id='payout_account_name']`).clear().type('Sony');    //edit name field
    //         cy.xpath(`//form[@id='user_payout_edit_form']//input[@name='commit']`).click(); //click save button
    //         cy.xpath(`//p[@class='alert-message-div alert alert-success']`).should("have.text",'Your account has been updated')    //success message
    //     }
    //     })
}