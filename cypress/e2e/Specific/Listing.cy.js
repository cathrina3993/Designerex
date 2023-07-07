import * as ListDress from "../../../pageobject/ListDress/ListYourDress";
import * as EditDress from "../../../pageobject/ListDress/UpdateListedDress"

describe("List Your Dress", () => {
  beforeEach(() => {
    const email = Cypress.env("useremail2");
    const password = Cypress.env("userpassword2");
    cy.visitUrl();
    cy.login(email, password);
    cy.visitUrl();
  });

  it("List Your Dress", () => {
      ListDress.listMyDressStepOne()
      ListDress.listMyDressStepTwo()
      ListDress.listMyDressStepThree()
      ListDress.listMyDressStepFour()
     });

     it ("Udpate the Existing listing dress",()=>{
      EditDress.goToDashboard()
      EditDress.GotoListing()
      EditDress.updateDress()
      ListDress.listMyDressStepTwo()
      ListDress.listMyDressStepThree()
      EditDress.UploadDressImage()

     })

  it("View Detail of the Listed Dress", () => {
    EditDress.goToDashboard();
    EditDress.GotoListing();
    EditDress.ViewDetailofListedDress();
    ListDress.listMyDressStepOne();
    ListDress.listMyDressStepTwo();
    ListDress.listMyDressStepThree();
    EditDress.UploadDressImage();
  });

  it ("Archive the Listed Dress",()=>{
    EditDress.goToDashboard();
    EditDress.GotoListing();
    EditDress.archiveDress()
  })
});
