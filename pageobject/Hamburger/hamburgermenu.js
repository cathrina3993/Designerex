export function hamburger(){
    cy.get('.JT-hamburger-dropdown > .JT-whenTop').click();  //click on hamburgermenu
}

export function howitworkswologin(){
    cy.xpath(`//a[normalize-space()='How it Works']`).click();  //click on how it works
    //Assertions for how it works page.
    cy.get('.JT-staticpage__content > .JT-staticpage__container-head').should("have.text", 'How it works');
    cy.get('.JT-staticpage__content > .JT-staticpage__container-content > .JT-staticpage__container-btnGroup > .JT-btn-primary').should("have.text", 'Start Browsing');
    cy.get('.JT-staticpage__TandS > .JT-staticpage__container-head').should("have.text",'Trust & Security');
    cy.get(':nth-child(3) > .JT-staticpage__content > .JT-staticpage__invite > .JT-staticpage__container-head').should("have.text",'Give $10, Get $10');
    cy.xpath(`//a[@id='login_link']`).should("have.text", 'Invite Friends');
    cy.get(':nth-child(4) > .JT-staticpage__content > .JT-staticpage__invite > .JT-staticpage__container-head').should("have.text",'Help & FAQ');
    cy.get(':nth-child(4) > .JT-staticpage__content > .JT-staticpage__invite > .JT-staticpage__container-content > .JT-staticpage__container-btnGroup > .JT-btn-primary').should("have.text",' Visit Help & FAQ');
}

export function howitworkswithlogin(){
    cy.xpath(`//a[normalize-space()='How it Works']`).click();  //click on how it works
    //Assertions for how it works page.
    cy.get('.JT-staticpage__content > .JT-staticpage__container-head').should("have.text", 'How it works');
    cy.get('.JT-staticpage__content > .JT-staticpage__container-content > .JT-staticpage__container-btnGroup > .JT-btn-primary').should("have.text", 'Start Browsing');
    cy.get('.JT-staticpage__TandS > .JT-staticpage__container-head').should("have.text",'Trust & Security');
    cy.get(':nth-child(3) > .JT-staticpage__content > .JT-staticpage__invite > .JT-staticpage__container-head').should("have.text",'Give $10, Get $10');
    cy.xpath(`//a[@class='squatchpop1 JT-btn-primary JT-btn--width']`).should("have.text", 'Invite Friends');
    cy.get(':nth-child(4) > .JT-staticpage__content > .JT-staticpage__invite > .JT-staticpage__container-head').should("have.text",'Help & FAQ');
    cy.get(':nth-child(4) > .JT-staticpage__content > .JT-staticpage__invite > .JT-staticpage__container-content > .JT-staticpage__container-btnGroup > .JT-btn-primary').should("have.text",' Visit Help & FAQ');
}

 export function rent(){
    cy.xpath(`//a[normalize-space()='Rent']`).click(); //click on Rent
    //Assertion in rent page
    cy.get(':nth-child(1) > .JT-staticpage__content > .JT-staticpage__container-head').should("have.text",'Renting');
 }
export function lend(){
    cy.xpath(`//a[normalize-space()='Lend']`).click(); //click on lend
    //Assertion of lend page
    cy.get(':nth-child(1) > .JT-staticpage__content > .JT-staticpage__container-head').should("have.text",'Lending');
}
export function designerdropdown(){
    cy.xpath(`//a[@id='JT-hamburger-designer-dropdown']`).click();  //click on designer dropdown
    //View all
    cy.xpath(`//div[@id='designerCollapse']//a[@class='JT-dropdown-linkBtn'][normalize-space()='View All']`).click ();  //click on view all
    //assertion
    cy.get('.designer-title').should("have.text",'Designers');
    cy.get('[href="designer/antonio-berardi"]').click();    //click on the brand antonio-berardi
    
}

export function occasion(){
    cy.xpath(`//img[@class='JT-hamburger-img']`).click()    //click on the hamburger menu
    cy.xpath(`//a[@id='JT-hamburger-occasion-dropdown']`).click();  //click on occasion dropdown
    cy.xpath(`//a[normalize-space()='Formal']`).click();    //click on formal
}

export function aboutus(){
    cy.xpath(`//img[@class='JT-hamburger-img']`).click();    //click on the hamburger menu
    cy.xpath(`//a[normalize-space()='About us']`).click();     //click on about us
    //assertion
    cy.get(':nth-child(1) > .JT-staticpage__container-head').should("have.text",'About Us');
}

export function FAQ(){
    cy.xpath(`//a[@class='JT-dropdown-linkBtn'][normalize-space()='Help & FAQ']`).invoke('removeAttr','target').click();    //clicking on the link
    cy.url().should('include','https://designerex.groovehq.com/help');  //checking url
    cy.xpath(`//h1[normalize-space()='How can we help you?']`).should("have.text",'How can we help you?');  //asseryion
    cy.xpath(`//a[contains(text(),'What is Designerex™?')]`).click();   //click a question
    cy.go('back');  //go back to previous page
    cy.go('back');  // go back to parent tab
}

export function Logout(){
    cy.xpath(`//a[normalize-space()='Logout']`).should("have.text",'Logout');   //assetion
}