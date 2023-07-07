import * as Messages from "../../../pageobject/Messages/viewmessage"
import * as Dashboard from "../../../pageobject/Dashboard/dashboard"
import * as Sendmessage from "../../../pageobject/Messages/sendmessage"
import * as Searchalldress from "../../../pageobject/homePage/SearchDress/Findwologin"

describe("Test Scenarios of Messages", () => {
    beforeEach(() => {
      const email = Cypress.env("useremail");
      const password = Cypress.env("userpassword");
      cy.visitUrl()
      cy.login(email,password)
      cy.visitUrl()
    });

    it("View messages from dashboard", () =>{
        Dashboard.viewdashboard();
        Messages.viewmessagetab();
    })

    it ("View specific message", () => {
        Dashboard.viewdashboard();
        Messages.viewmessagetab();
        Messages.viewspecificmessage();
    })

    it ("Send message from dashboard", () =>{
        Dashboard.viewdashboard();
        Messages.viewmessagetab();
        Sendmessage.sendmessagefromtab();
    })

    it ("Send message while renting a dress", () =>{
        Searchalldress.findSpecificDress();
        Sendmessage.sendwhilebooking();
    })
})