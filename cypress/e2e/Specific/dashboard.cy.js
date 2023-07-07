import * as Dashboard from "../../../pageobject/Dashboard/dashboard"

describe("Dashboard", () => {
    beforeEach(() => {
      const email = Cypress.env("useremail");
      const password = Cypress.env("userpassword");
      cy.visitUrl()
      cy.login(email,password)
      cy.visitUrl()
    });

    it ("View Dashboard", () => {
        Dashboard.viewdashboard();
    })

    it ("Edit profile from dashboard", () =>{
        Dashboard.viewdashboard();
        Dashboard.editprofilefromdashboard();
    })
});