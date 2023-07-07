export function userIdVerification(){
cy.xpath(`//a[normalize-space()='ID Verification']`).click(); //click on the Idverification section
cy.xpath(`//h3[normalize-space()='What is ID Verification?']`).should(`have.text`,`What is ID Verification?`) //assert the text
cy.xpath(`//h5[normalize-space()='Is Verifying my ID secure?']`).should(`have.text`,`Is Verifying my ID secure?`)
cy.xpath(`//button[@id='next_verification']`).click().wait(3000); //click on continue button
cy.xpath(`//div[@id='verification_content']`).click();
//cy.xpath(`//div[@id='verification_content']`).dblclick();

}