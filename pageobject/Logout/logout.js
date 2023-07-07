export function Logout(){
    cy.xpath(`//a[normalize-space()='Logout']`).click();    //click logout button
    cy.xpath(`//a[@id='login-modal-btn']`).should("have.text",'Login');     //view login button after logging out
}