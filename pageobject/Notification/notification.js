export function viewnotif(){
    cy.get('[data-remote="true"] > .JT-whenTop').click();    //click notification icon
    //cy.scrollTo(0, 500);
}

export function viewspecificnotif(){
    cy.xpath(`(//div[@class="JT-navnotification-container"])[1]`).click();     //click on the first notification
}