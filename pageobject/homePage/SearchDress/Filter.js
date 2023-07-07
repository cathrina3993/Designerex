export function filterFromSize() {
  cy.get(":nth-child(1) > .JT-filterPanel-collapseHead-label").click(); //click on the dropdown icon of the size
  cy.get("#Size_refine > .JT-checkbox > :nth-child(3) > label").click(); //select the specific size
  cy.get("#search_result > :nth-child(2)").click(); // click on the specific dress from the list
  cy.get("#reservation_size").then(($option) => {
    if ($option.is(":visible")) {
      cy.log("There are multiple size for this dress");
    } else {
      cy.get(":nth-child(2) > .form-group > .JT-single-option").then(
        ($size) => {
          const dresssize = $size.text();
          cy.log("The selected size of the dress is : " + dresssize);
        }
      );
    }
  });

  cy.get(".JT-common-goback").click(); //go back
  cy.get(":nth-child(4) > .JT-filterPanel-collapseHead-label").click(); //click on the dropdown icon of the price
}
export function filterFromSlider() {
  cy.get("#slider-range").then(($slider) => {
    // Determine the slider's minimum and maximum values
    const min = $slider.attr("min");
    const max = $slider.attr("max");
    // Calculate the value to set the slider to
    const value = Math.floor((max - min) / 2);
    // Set the slider to the calculated value
    cy.wrap($slider).invoke("val", value).trigger("25");

    // Send the real input value to the slider
    cy.get("#slider-range")
      .trigger("mousedown", { which: 1, pageX: 200 })
      .trigger("mousemove", { which: 1, pageX: 140 })
      .trigger("mouseup", { force: true });
  });
}
