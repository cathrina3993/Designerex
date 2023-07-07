import * as Notification from "../../../pageobject/Notification/notification"

describe("Test Sceanrios After Logging The System", () => {
    beforeEach(() => {
      const email = Cypress.env("useremail");
      const password = Cypress.env("userpassword");
      cy.visitUrl()
      cy.login(email,password)
      cy.visitUrl()
    });

    it("View all notification", () =>{
        Notification.viewnotif();
    })

    it("View specific notification", () =>{
        Notification.viewnotif();
        Notification.viewspecificnotif();
    })
})