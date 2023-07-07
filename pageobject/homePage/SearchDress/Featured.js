export function featuredDress() {
  cy.get(".container > h5").should("have.text", "Featured"); //assert
}

export function viewAllDress() {
  cy.get(".container > .JT-btn-primary").click(); //Click on the View All button.
}

export function totalDressNo() {
  cy.get(".text-muted").then(($totaldress) => {
    const totaldresscount = $totaldress.text(); //store the count of dress
    cy.log(totaldresscount);
  });
}

export function learnMoreAboutRenting() {
  cy.get(
    ".JT-rent-info > .container > .JT-rent-lend-content > .JT-rent-lend-content-block > .JT-button-group > .JT-btn-white"
  ).click();
  cy.get(
    ":nth-child(1) > .JT-staticpage__content > .JT-staticpage__container-head"
  ).should("have.text", "Renting");
  cy.get(
    ".JT-staticpage__content > .JT-staticpage__container-content > .JT-staticpage__container-btnGroup > .JT-btn-primary"
  ).click(); //Click on the start browsing
}

export function browseAllDressess() {
  cy.get(
    ".JT-rent-info > .container > .JT-rent-lend-content > .JT-rent-lend-content-block > .JT-button-group > .JT-btn-primary"
  ).click();
}

export function learnMoreAboutLending() {
  cy.get(
    ".JT-lend-info > .container > .JT-rent-lend-content > .JT-rent-lend-content-block > .JT-button-group > .JT-btn-white"
  ).click();
  cy.get(
    ":nth-child(1) > .JT-staticpage__content > .JT-staticpage__container-head"
  ).should("have.text", "Lending");
}
