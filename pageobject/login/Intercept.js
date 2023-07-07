// export function interceptRequest() {
//     cy.intercept("POST", "https://sdk.iad-05.braze.com/api/v3/data/").as("loaddata")
//     cy.intercept("POST", "https://sdk.iad-05.braze.com/api/v3/content_cards/sync").as("sync")
//     cy.visit("https://sdk.iad-05.braze.com/")
//     cy.wait(["@loaddata", "@sync"])
// }


export function interceptPastFilter() {
    cy.intercept("GET", "https://staging.designerex.com.au/dashboard/renting?filter=past ").as("filterpast")
    cy.visit("https://staging.designerex.com.au/dashboard/renting?filter=past")
    cy.wait("@filterpast")
}

export function interceptDeclinedDress(){
    cy.intercept("GET", "https://staging.designerex.com.au/dashboard/renting?filter=declined ").as("loaddeclined")
    cy.visitUrl()
    cy.visit("https://staging.designerex.com.au/dashboard/renting?filter=declined")
    cy.wait('@loaddeclined')

}