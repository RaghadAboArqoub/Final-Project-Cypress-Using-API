class DeleteCardActions {
   openBoard(boardURL){
    cy.visit(boardURL)
    return this

   }
    deleteCard(){
        cy.findByTestId("quick-card-editor-button").click({force:true})
        cy.wait(1000)
        cy.findByTestId("quick-card-editor-archive").click()
        cy.wait(1000)
        return this
    }

}
export default DeleteCardActions;