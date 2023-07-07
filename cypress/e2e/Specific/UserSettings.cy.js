import * as PaymentDetails from "../../../pageobject/User Settings/Payment"
import * as UserSetting from "../../../pageobject/User Settings/usersetting"
import * as PromoProgram from "../../../pageobject/User Settings/Promo"
import * as Changepassword from "../../../pageobject/User Settings/ChangePassword"
import * as Verification from "../../../pageobject/User Settings/IdVerification"
import * as Profile from "../../../pageobject/Profile/ProfileObj";
import * as PersonalInfo from "../../../pageobject/User Settings/PersonalInfo";
import * as DeliverAddress from "../../../pageobject/User Settings/DeliveryAddress";

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
      const email = Cypress.env("useremail2");
      const password = Cypress.env("userpassword2");
      cy.visitUrl()
      cy.login(email,password)
      cy.visitUrl()
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
  
})