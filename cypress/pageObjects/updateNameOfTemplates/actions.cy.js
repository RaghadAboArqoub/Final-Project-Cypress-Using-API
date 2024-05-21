class updateNameOfTemplatesActions {
    openBoard(boardURL){
     cy.visit(boardURL)
     return this
 
    }
    NavigateCard(){
        cy.findByTestId("quick-card-editor-button").click({force:true})
        cy.wait(1000)
    }
    editCardName(newCardName){
        cy.findByTestId('quick-card-editor-card-title').clear()
        cy.findByTestId('quick-card-editor-card-title').type(newCardName)
        cy.contains("Save").click()
        return this

    }

 }
 export default updateNameOfTemplatesActions;