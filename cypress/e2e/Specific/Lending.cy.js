import * as Dashboard from "../../../pageobject/Dashboard/dashboard"
import * as FilterLending from "../../../pageobject/Lending/FilterforLending"
import * as searchAllDress from "../../../pageobject/homePage/SearchDress/Findwologin"
import * as BorrowDress from "../../../pageobject/homePage/InitialFeatures/RequestBooking"
import * as Renting from '../../../pageobject/Renting/RequestToBook'
import * as Lendingstatus from "../../../pageobject/Lending/changelendingstatus"
import * as Listdress from "../../../pageobject/ListDress/ListYourDress"

// describe("List Dress", () => {
//     beforeEach(() => {
//       const email = Cypress.env("useremail2");
//       const password = Cypress.env("userpassword");
//       cy.visitUrl();
//       cy.login(email, password);
//       cy.visitUrl();
//     });
    
//     // Define the number of times you want to loop
//     const loopCount = 2;
//     // Use a for loop to repeat the test steps
//     for (let i = 0; i < loopCount; i++) {
    
//         it("List dress", () => {
//         Listdress.listMyDressStepOne();
//         Listdress.listMyDressStepTwo();
//         Listdress.listMyDressStepThree();
//         Listdress.listMyDressStepFour();
//         })
//     }
// })

describe("Request Booking", () => {
    beforeEach(() => {
      const email = Cypress.env("userrent");
      const password = Cypress.env("userpassword");
      cy.visitUrl();
      cy.login(email, password);
      cy.visitUrl();
    });
    
    // Define the number of times you want to loop
    const loopCount = 2;
    // Use a for loop to repeat the test steps
    for (let i = 0; i < loopCount; i++) {
        
        it ("Request", () => {
        searchAllDress.searchAll();
        BorrowDress.requestToBookStepOne();
        Renting.RequestBooking();
        })
    }
})

describe("Lend Your Dress", () => {
    beforeEach(() => {
      const email = Cypress.env("useremail2");
      const password = Cypress.env("userpassword");
      cy.visitUrl();
      cy.login(email, password);
      cy.visitUrl();
    });

    it ("Filter Lending dress", () => {
        Dashboard.viewdashboard();
        FilterLending.GotoLendingTab();
        FilterLending.dropdown();
        FilterLending.currentlending();
        FilterLending.sortlist();
        FilterLending.dropdown();
        FilterLending.pastlending();
        FilterLending.sortlist();
        FilterLending.dropdown();
        FilterLending.expiredlending();
        FilterLending.sortlist();
        FilterLending.dropdown();
        FilterLending.declinedlending();
        FilterLending.sortlist();
        FilterLending.dropdown();
        FilterLending.cancelledlending();
        FilterLending.sortlist();
        })
    
    it ("Accept booking request", () => {
        Dashboard.viewdashboard();
        FilterLending.GotoLendingTab();
        FilterLending.dropdown();
        FilterLending.currentlending();
        Lendingstatus.acceptlending();
    })

    it ("Decline booking request", () => {
        Dashboard.viewdashboard();
        FilterLending.GotoLendingTab();
        FilterLending.dropdown();
        FilterLending.currentlending();
        Lendingstatus.declinelending();
        FilterLending.dropdown();
        FilterLending.declinedlending();
    })
});
