export function goToDashboard() {
  cy.xpath(`(//img[@id='profile_image_header'])[1]`).click(); //click on the profile icon
  cy.get(".JT-dropdown-menu > :nth-child(2) > .JT-dropdown-linkBtn").click(); //click on the dashboard option
}

export function GotoListing() {
  cy.xpath(`//a[normalize-space()='Listings']`).click(); //click on the listing section
}

export function updateDress() {
  cy.xpath(`(//a[contains(text(),'Edit')])[3]`).click(); //click on the edit icon
  cy.get("#listdress_size").click(); //click on the dropdown icon to select size
  cy.get(":nth-child(3) > .US").click(); //select the size
  cy.get("#listdress_size").click(); //click on the dropdown icon to select size
  cy.get(":nth-child(3) > .AU").click(); //select the size
  cy.get("#dress_colour").select("Green"); //Colour Category
  cy.get("#tab_1").click(); //Click on the next button
}

export function UploadDressImage() {
//   cy.get(".JTscript-dressremove").then(($cross) => {
//     if ($cross.is(":visible")) {
//       cy.get(".JTscript-dressremove").click();
//     } else {
//       cy.log("No image to cancel you can upload another image");
//     }
//   });
  const GreenGown = "greengown2.jpg";
  cy.get("input[type='file'][name='image[image]']")
    .attachFile(GreenGown, { action: "input", force: true })
; //upload image
  cy.get(".spin-center > p")
    .should("be.visible")
    .then(() => {
      cy.wait(10000);
    });
  cy.get('[value="Save & Publish"]').click(); // click save and publish button
  cy.xpath(`//h4[contains(text(),'Your Dress has been')]`).should(
    "have.text",
    "Your Dress has been  Successfully Listed!"
  ); //assert after listing done successfully
}

export function ViewDetailofListedDress() {
  cy.xpath(`(//a[contains(text(),'View Details')])[1]`).click(); //click on the view detail button
  cy.get("#edit_dress > .JT-btn-default").should("be.visible");
  cy.get(':nth-child(1) > .JT-dblisting-additionaldetails__collapsiblelabel > .JT-dblisting-additionaldetails__collapsible').click();
  cy.get('.JT-dressPreview-additionaldetails__container > .JT-dblisting-additionaldetails__collapsiblelabel > .JT-dblisting-additionaldetails__collapsible').click()
  cy.get(':nth-child(3) > .JT-dblisting-additionaldetails__collapsiblelabel > .JT-dblisting-additionaldetails__collapsible').click();
  cy.get("#edit_dress > .JT-btn-default").click();
}

export function archiveDress(){
   cy.xpath(`(//a[@class='JT-btn-pink-link JT-dashboard-card__archive-btn'][normalize-space()='Archive'])[2]`).click(); //click on the archive button
   cy.get(`.alert-message-div`).should('have.text',"Your dress has been moved to unlisted tab.");
}