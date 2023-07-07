export function viewcart(){
    cy.xpath(`//img[@class='JT-brandLogo JT-w100']`).click();   //go to homepage
    cy.xpath(`//span[@class='JT-main-menu-nav-icons JT-main-menu-checkout']//img[@class='JT-nav-icon JT-whenTop']`).click();    //click on cart button
}

export function continuetocheckout(){
    cy.xpath(`//a[normalize-space()='Continue to Checkout']`).first().click();  //click continue to checkout button
}

export function removeitems(){
    cy.xpath(`//a[normalize-space()='Remove all items from bag']`).click();     //click remove items from cart
}