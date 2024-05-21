class updateNameOfTemplatesAssertions {
    checkCardTempateNameUpated(newCardName){
        cy.findByTestId("quick-card-editor-button").click({force:true})
        cy.wait(1000)

        cy.findByTestId("quick-card-editor-open-card").click();
        cy.wait(1000)

        cy.findByTestId("card-name").should("contain",newCardName)
    }
 }
 export default updateNameOfTemplatesAssertions;