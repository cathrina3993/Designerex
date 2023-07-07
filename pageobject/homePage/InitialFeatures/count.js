export function countTotalDesignerDress() {
  cy.get("#total_dress_count_au_usa").then(($totaldresscount) => {
    // store the button's text
    const count = $totaldresscount.text();

    cy.log(count);
  });
}

export function countDressLender() {
  cy.get("#total_lender_count_au_usa").then(($totaldresslender) => {
    // store the button's text
    const count = $totaldresslender.text();

    cy.log(count);
  });
}

export function brandCount() {
  cy.get("#total_brand_count_au_usa").then(($totalbrandcount) => {
    // store the button's text
    const count = $totalbrandcount.text();

    cy.log(count);
  });
}
