//To call globally

Cypress.Commands.add("writeEmailUsingFaker", (email) => {
  //this is for same email using multiple times
  cy.xpath(`//input[@id='new_email']`).type(email);
  cy.xpath(`//input[@id='confirm_new_email']`).type(email);
});

Cypress.Commands.add("visitUrl", () => {
  //this is for the authentication process after visiting the url
  cy.visit("https://staging.designerex.com.au/", {
    auth: {
      username: "staging",
      password: "designer123",
    },
  });
  cy.xpath(
    `//div[@id='country-modal']//button[@type='button'][normalize-space()='×']`
  ).click(); //donot choose any country
});

Cypress.Commands.add("login", (email, password) => {
  //this is for session storage
  cy.session([email, password], () => {
    cy.visitUrl();
    cy.get("#login-modal-btn").click(); //click login modal
    cy.get("#user-email").type(email);
    cy.get("#user_password").type(password);
    cy.xpath(`//input[@value='Login'][1]`).click();
    cy.get(".showAbove767.JT-userDetail").should("be.visible");
  });
});
