import * as HambugerMenu from "../../../pageobject/Hamburger/hamburgermenu"

describe("Test Sceanrios After Logging The System", () => {
    beforeEach(() => {
      const email = Cypress.env("useremail");
      const password = Cypress.env("userpassword");
      cy.visitUrl();
      cy.login(email, password);
      cy.visitUrl();
    });
    it('Hamburger Menu with logging in',()=>{
        HambugerMenu.hamburger()
        HambugerMenu.howitworkswithlogin()
        HambugerMenu.hamburger()
        HambugerMenu.rent()
        HambugerMenu.hamburger()
        HambugerMenu.lend()
        HambugerMenu.hamburger()
        HambugerMenu.designerdropdown()
        HambugerMenu.occasion()
        HambugerMenu.aboutus()
        HambugerMenu.hamburger()
        HambugerMenu.FAQ()
        HambugerMenu.hamburger()
        HambugerMenu.Logout()
        })
})