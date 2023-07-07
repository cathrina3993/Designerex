import * as Search from "../../../pageobject/homePage/SearchDress/Findwologin";
import * as Count from "../../../pageobject/homePage/InitialFeatures/count";
import * as Favourite from "../../../pageobject/homePage/InitialFeatures/AddToFavourite";
import * as HomePage from "../../../pageobject/homePage/SearchDress/Featured";
import * as Fliterdress from "../../../pageobject/homePage/SearchDress/Filter";
describe("Initial Features", () => {
    beforeEach(() => {
      const email = Cypress.env("useremail");
      const password = Cypress.env("userpassword");
      cy.visitUrl();
      cy.login(email, password);
      cy.visitUrl();
    });
  
    it("Search all dresses", () => {
      Search.searchAll();
    });
  
    it("Total Dress Count", () => {
      Count.countTotalDesignerDress();
    });
  
    it("Total Count of Dress Lender", () => {
      Count.countDressLender();
    });
  
    it("Total Count of  Designer Brand", () => {
      Count.brandCount();
    });
  
    it("Find all dresses", () => {
      Search.findAllDress();
    });
  
    it("Find specific dress", () => {
      Search.findSpecificDress();
    });
  
    it("View all dress", () => {
      HomePage.viewAllDress();
    });
  
    it("Filter dress", () => {
      Search.searchAll();
      Fliterdress.filterFromSize();
      Fliterdress.filterFromSlider();
    });
  
    it("Add to favourite", () => {
      Search.searchAll();
      Favourite.addWishList();
      Favourite.wishListAfterLogin();
    });
  
    it("View Wish List and Remove Dress From List", () => {
      Favourite.viewWishList();
      Favourite.wishListAfterLogin();
    });
})