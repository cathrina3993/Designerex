import Featurepage, { totalDressNo } from "../SearchDress/Featured"
export function findAllDress() {
  cy.get("#designer_list_input").click(); //click on the designer

  cy.get("#select_all_brands").click(); //select All Designers

  cy.get("#dress_size_input").click(); //click on the dress size imputs

  cy.get("#select_all_sizes").click(); //select the dress size

  cy.get("#target_date_selector").click(); //click on the date selector

   // Find and select a visible date within the datepicker
   cy.get('.datepicker-days > .table-condensed')
   .filter(':visible') // Filter only visible date elements
   .first() // Select the first visible date
   .click();
  //cy.get('[data-date="1685059200000"]').click(); //select the date

  cy.get(".JT-heroSearch-btn > .JT-searchBtn").click(); //click on the search box
  cy.get(".emptySearchList > span").then(($txt) => {
    // if the search box is empty
    if ($txt.length > 0) {
      cy.log("No Dress Found");
    } else {
    //   cy.get(".text-muted").then(($totaldress) => {
    //     const totaldresscount = $totaldress.text(); //store the count of dress
    //     cy.log(totaldresscount);
    //   });
    Featurepage.totalDressNo()
    }
  });
}

export function findSpecificDress() {
  cy.get("#designer_list_input").click(); //click on the designer
  cy.get("#JT-search__filter-input").type("Valentino"); //type the specific designer
  cy.get("#designer_brand_value_285 > .designer-checkbox-clicked").click(); //click on the checkbox
  cy.get("#dress_size_input").click(); //click on the dress size imputs
  cy.get('[data-val="4"]').click(); //click on the dress size value
  cy.get("#target_date_selector").click(); //click on the date selector
  // Find and select a visible date within the datepicker
  cy.get('.datepicker-days > .table-condensed')
  .filter(':visible') // Filter only visible date elements
  .first() // Select the first visible date
  .click();
  //cy.get('[data-date="1685059200000"]').click(); //select the date
  cy.get(".JT-heroSearch-btn > .JT-searchBtn").click(); //click on the search box
  cy.get(".JT-card__dressname").should("have.text", "Valentino");
}

export function searchAll() {
  cy.get(".JT-heroSearch-btn > .JT-searchBtn").click();
}

