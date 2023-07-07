export function viewmessagetab(){
    cy.xpath(`//a[normalize-space()='Messages']`).click();  //click on message tab
}

export function viewspecificmessage(){
    //cy.contains('Message Inbox').then(($message)=>{
    cy.xpath(`//p[@class='JT-dashboard__conversation-container-head']`).then(($message) => {
        //const value = $message.text();
        if ($message.is(':visible')) {
          cy.xpath(`(//div[@class="JT-dashboard__conversation-content"])[1]`).click();
        } else {
            cy.wait(2000);
          cy.xpath(`//div[@class='no_message text-center']`).should("have.text",'You have no messages');
        }
      });
      cy.xpath(`//a[normalize-space()='Show profile']`).click();  //show profile
      cy.go('back');  //go previous page
}