import * as ListDress from "../../../pageobject/ListDress/ListYourDress";
import * as HomePage from "../../../pageobject/homePage/SearchDress/Featured";
import * as Search from "../../../pageobject/homePage/SearchDress/Findwologin";
import * as Count from "../../../pageobject/homePage/InitialFeatures/count";
import * as Favourite from "../../../pageobject/homePage/InitialFeatures/AddToFavourite";
import * as Profile from "../../../pageobject/Profile/ProfileObj";
import * as Fliterdress from "../../../pageobject/homePage/SearchDress/Filter";
import * as UserSetting from "../../../pageobject/User Settings/usersetting";
import * as PersonalInfo from "../../../pageobject/User Settings/PersonalInfo";
import * as DeliverAddress from "../../../pageobject/User Settings/DeliveryAddress";
import * as EditDress from "../../../pageobject/ListDress/UpdateListedDress";
import * as PaymentDetails from "../../../pageobject/User Settings/Payment";
import * as PromoProgram from "../../../pageobject/User Settings/Promo";
import * as Changepassword from "../../../pageobject/User Settings/ChangePassword";
import * as Dashboard from "../../../pageobject/Dashboard/dashboard";
import * as Messages from "../../../pageobject/Messages/viewmessage";
import * as Sendmessage from "../../../pageobject/Messages/sendmessage";
import * as Searchalldress from "../../../pageobject/homePage/SearchDress/Findwologin";
import * as Notification from "../../../pageobject/Notification/notification";
import * as searchAllDress from "../../../pageobject/homePage/SearchDress/Findwologin";
import * as BorrowDress from "../../../pageobject/homePage/InitialFeatures/RequestBooking";
import * as Renting from "../../../pageobject/Renting/RequestToBook";
import * as FilterDress from "../../../pageobject/Renting/FilterRentingDress";
import * as Verification from "../../../pageobject/User Settings/IdVerification";
import * as Lendingstatus from "../../../pageobject/Lending/changelendingstatus"
import * as FilterLending from "../../../pageobject/Lending/FilterforLending"
import * as HambugerMenu from "../../../pageobject/Hamburger/hamburgermenu"
import * as Loggingout from "../../../pageobject/Logout/logout"

describe("Test Sceanrios After Logging The System", () => {
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
    it('Hamburger Menu',()=>{
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
 });

describe("Dashboard", () => {
  beforeEach(() => {
    const email = Cypress.env("useremail");
    const password = Cypress.env("userpassword");
    cy.visitUrl();
    cy.login(email, password);
    cy.visitUrl();
  });

  it("View Dashboard", () => {
    Dashboard.viewdashboard();
  });

  it("Edit profile from dashboard", () => {
    Dashboard.viewdashboard();
    Dashboard.editprofilefromdashboard();
  });
});
describe("User Profile", () => {
  beforeEach(() => {
    const email = Cypress.env("newuser");
    const password = Cypress.env("userpassword2");
    cy.visitUrl()
    cy.login(email,password)
    cy.visitUrl()
  });
    it("View Profile", () => {
      Profile.viewprofile();
    });
  
    it("Edit Profile", () => {
      Profile.editprofile();
    });
  
    it("Share Profile", () => {
      Profile.viewprofile();
      Profile.shareprofile();
    });
})

describe("User Settings", () => {
  beforeEach(() => {
    const email = Cypress.env("useremail");
    const password = Cypress.env("userpassword");
    cy.visitUrl();
    cy.login(email, password);
    cy.visitUrl();
  });
  it("ID Verification", () => {
    UserSetting.usersettings();
    Verification.userIdVerification();
  });

  it("View payment details", () => {
    UserSetting.usersettings();
    PaymentDetails.viewpaymentdetails();
  });

  it("Edit payment details", () => {
    UserSetting.usersettings();
    PaymentDetails.viewpaymentdetails();
    PaymentDetails.editpaymentdetails();
  });

  it("View promo programs", () => {
    UserSetting.usersettings();
    PromoProgram.viewpromo();
  });

  it("View User settings", () => {
    UserSetting.usersettings();
    UserSetting.assertusersettings();
  });

  it("View Personal Info", () => {
    UserSetting.usersettings();
    PersonalInfo.viewpersonalinfo();
  });

  it("Edit Personal Info", () => {
    UserSetting.usersettings();
    PersonalInfo.viewpersonalinfo();
    PersonalInfo.editperonalinfo();
  });

  it("View Delivery Address Details", () => {
    UserSetting.usersettings();
    DeliverAddress.viewdeliveryaddress();
  });

  it("Validate and Save Delivery Address ", () => {
    UserSetting.usersettings();
    DeliverAddress.viewdeliveryaddress();
    DeliverAddress.validateandsave();
  });

  it("View payment details", () => {
    UserSetting.usersettings();
    PaymentDetails.viewpaymentdetails();
  });

  it("Edit payment details", () => {
    UserSetting.usersettings();
    PaymentDetails.viewpaymentdetails();
    PaymentDetails.editpaymentdetails();
  });

  it("View promo programs", () => {
    UserSetting.usersettings();
    PromoProgram.viewpromo();
  });

  it("Choose promo program", () => {
    UserSetting.usersettings();
    PromoProgram.viewpromo();
    PromoProgram.choosepromo();
  });

  it("Change Password", () => {
    UserSetting.usersettings();
    Changepassword.changepassword();
  });

});

describe("Rent  the Dress", () => {
  beforeEach(() => {
    const email = Cypress.env("userrent");
    const password = Cypress.env("userpassword");
    cy.visitUrl();
    cy.login(email, password);
    cy.visitUrl();
  });

  it("Request the dress for booking", () => {
    searchAllDress.searchAll();
    BorrowDress.requestToBookStepOne();
    Renting.RequestBooking();
  });

  it("Filter The Renting Dress", () => {
    EditDress.goToDashboard();
    Renting.ViewListOfRentingDress();
    FilterDress.clickOnDropDown();
    FilterDress.filterRentingByPass();
    FilterDress.clickOnDropDown();
    FilterDress.filterExpiredRentingDress();
    FilterDress.clickOnDropDown();
    FilterDress.filterDeclinedRequest();
    FilterDress.clickOnDropDown();
    FilterDress.filterCancelledRequest();
    FilterDress.clickOnDropDown();
    FilterDress.FilterByCurrent();
    FilterDress.SortByDropdown();
    FilterDress.sortByNewToOld();
    FilterDress.SortByDropdown();
    FilterDress.sortByOldToNew();
  });

  it("View List of Renting Dress", () => {
    EditDress.goToDashboard();
    Renting.ViewListOfRentingDress();
    Renting.GotoDetailPage();
    Renting.messageFromDetailPage();
  });

  it("View The Cancellation Policy", () => {
    EditDress.goToDashboard();
    Renting.ViewListOfRentingDress();
    Renting.GotoDetailPage();
    Renting.cancelPolicy();
  });

  it("Cancel the Booking Request", () => {
    EditDress.goToDashboard();
    Renting.ViewListOfRentingDress();
    Renting.GotoDetailPage();
    Renting.CancelRequest();
  });
});

describe("List Your Dress", () => {
  beforeEach(() => {
    const email = Cypress.env("useremail");
    const password = Cypress.env("userpassword");
    cy.visitUrl();
    cy.login(email, password);
    cy.visitUrl();
  });

  it("List Your Dress", () => {
    ListDress.listMyDressStepOne();
    ListDress.listMyDressStepTwo();
    ListDress.listMyDressStepThree();
    ListDress.listMyDressStepFour();
  });

  it("Udpate the Existing listing dress", () => {
    EditDress.goToDashboard();
    EditDress.GotoListing();
    EditDress.updateDress();
    ListDress.listMyDressStepTwo();
    ListDress.listMyDressStepThree();
    EditDress.UploadDressImage();
  });

  it("View Detail of the Listed Dress", () => {
    EditDress.goToDashboard();
    EditDress.GotoListing();
    EditDress.ViewDetailofListedDress();
    ListDress.listMyDressStepOne();
    ListDress.listMyDressStepTwo();
    ListDress.listMyDressStepThree();
    EditDress.UploadDressImage();
  });

  it("Archive the Listed Dress", () => {
    EditDress.goToDashboard();
    EditDress.GotoListing();
    EditDress.archiveDress();
  });
});

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
    const email = Cypress.env("useremail");
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

describe("Test Scenarios of Messages", () => {
  beforeEach(() => {
    const email = Cypress.env("useremail");
    const password = Cypress.env("userpassword");
    cy.visitUrl();
    cy.login(email, password);
    cy.visitUrl();
  });

  it("View messages from dashboard", () => {
    Dashboard.viewdashboard();
    Messages.viewmessagetab();
  });

  it("View specific message", () => {
    Dashboard.viewdashboard();
    Messages.viewmessagetab();
    Messages.viewspecificmessage();
  });

  it("Send message from dashboard", () => {
    Dashboard.viewdashboard();
    Messages.viewmessagetab();
    Sendmessage.sendmessagefromtab();
  });

  it("Send message while renting a dress", () => {
    Searchalldress.findSpecificDress();
    Sendmessage.sendwhilebooking();
  });
});

describe("Test Sceanrios of Notification", () => {
  beforeEach(() => {
    const email = Cypress.env("useremail");
    const password = Cypress.env("userpassword");
    cy.visitUrl();
    cy.login(email, password);
    cy.visitUrl();
  });

  it("View all notification", () => {
    Notification.viewnotif();
  });

  it("View specific notification", () => {
    Notification.viewnotif();
    Notification.viewspecificnotif();
  });
});

 describe("Logout", () => {
    beforeEach(() => {
      const email = Cypress.env("useremail");
      const password = Cypress.env("userpassword");
      cy.visitUrl();
      cy.login(email, password);
      cy.visitUrl();
    });
  
    it("Logout of the account", () => {
      HambugerMenu.hamburger();
      Loggingout.Logout();
    });
 });