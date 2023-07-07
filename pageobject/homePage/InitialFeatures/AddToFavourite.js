export function addFavouriteDress() {
  cy.get(".wish-empty-icon").first().click().wait(2000); //Click on the favourite icon
    cy.get(".JT-wishlistCount-num").then(($favcount) => {
    const value = $favcount.text();
    if (value.length > 0) {
      cy.log("The Favourite List of Dress Count is: " + value);
    } else {
      cy.log("There is no list of favourite dress");
    }
  });
}

export function addWishList(){
  cy.get(':nth-child(2) > .JT-card > .JT-card__wish > .wish-empty-icon').click().wait(3000) //add dress to wishlist clicking heart icon

}
  export function wishListAfterLogin(){
    cy.get('#JT-wishlist > a > .JT-wishlistCount-num') .then(($wishlist) => {
      const value = $wishlist.text();
      if (value.length > 0) {
        cy.log("The Favourite List of Dress Count is: " + value);
      } else {
        cy.log("There are no list of favourite dress");
      }
    });
  }

  export function viewWishList(){
    cy.get('#JT-wishlist > a > .JT-nav-icon').first().click() //click heart icon from the top right bar to view the wish list
    cy.xpath(`(//i[@class='fa fa-close'])[1]`).click().wait(3000) //remove any one dress from favourite
  }

