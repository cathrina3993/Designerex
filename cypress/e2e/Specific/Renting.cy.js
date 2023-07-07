import * as searchAllDress from "../../../pageobject/homePage/SearchDress/Findwologin"
import * as BorrowDress from "../../../pageobject/homePage/InitialFeatures/RequestBooking"
import * as Renting from '../../../pageobject/Renting/RequestToBook'
import * as EditDress from "../../../pageobject/ListDress/UpdateListedDress";
import * as FilterDress from "../../../pageobject/Renting/FilterRentingDress"
import * as Cart from "../../../pageobject/Renting/Cart"


describe("Rent the Dress", () => {
    beforeEach(() => {
      const email = Cypress.env("userrent");
      const password = Cypress.env("userpassword");
      cy.visitUrl();
      cy.login(email, password);
      cy.visitUrl();
    });

    it("Request the dress for booking",()=>{
        searchAllDress.searchAll();
        BorrowDress.requestToBookStepOne();
        Renting.RequestBooking();
    })

    it("Filter The Renting Dress",()=>{
      EditDress.goToDashboard()
      Renting.ViewListOfRentingDress()
      FilterDress.clickOnDropDown()
      FilterDress.filterRentingByPass()
      FilterDress.clickOnDropDown()
      FilterDress.filterExpiredRentingDress()
      FilterDress.clickOnDropDown()
      FilterDress.filterDeclinedRequest()
      FilterDress.clickOnDropDown()
      FilterDress.filterCancelledRequest()
      FilterDress.clickOnDropDown()
      FilterDress.FilterByCurrent()
      FilterDress.SortByDropdown()
      FilterDress.sortByNewToOld() 
      FilterDress.SortByDropdown()   
      FilterDress.sortByOldToNew()
    })

    it("View List of Renting Dress",()=>{
      EditDress.goToDashboard()
      Renting.ViewListOfRentingDress()
      Renting.GotoDetailPage()
    Renting.messageFromDetailPage()
    })

    it("View The Cancellation Policy",()=>{
      EditDress.goToDashboard()
      Renting.ViewListOfRentingDress()
      Renting.GotoDetailPage()
      Renting.cancelPolicy()
    })

    it("Cancel the Booking Request",()=>{
      EditDress.goToDashboard()
      Renting.ViewListOfRentingDress()
      Renting.GotoDetailPage()
      Renting.CancelRequest()
    })

    it("View Cart", () => {
      searchAllDress.searchAll();
      BorrowDress.requestToBookStepOne();
      Cart.viewcart();
    })

    it ("Request Booking from Cart", () => {
      searchAllDress.searchAll();
      BorrowDress.requestToBookStepOne();
      Cart.viewcart();
      Cart.continuetocheckout();
      Renting.RequestBooking();
    })

    it ("Remove all items from cart", () => {
      searchAllDress.searchAll();
      BorrowDress.requestToBookStepOne();
      Cart.viewcart();
      Cart.removeitems();
    })
}); 