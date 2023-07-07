export function viewpromo(){
    cy.xpath(`//a[normalize-space()='Designerex Promo Program']`).click();  //click designerex promo program
    cy.xpath(`//h4[normalize-space()='Designerex Promo Program']`).should("have.text",'Designerex Promo Program');  //assertion
}

export function choosepromo(){
    cy.xpath(`//label[contains(text(),'Tick this box to be available to all Promos (Recom')]`).click(); //select all promo
    cy.xpath(`//label[contains(text(),'Tick this box to be available to all Promos (Recom')]`).click(); //disselect all promo
}