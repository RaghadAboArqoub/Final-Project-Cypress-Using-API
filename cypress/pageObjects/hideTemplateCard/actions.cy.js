class hideTemplateCardActions{
    openBoard(boardURL){
        cy.visit(boardURL)
        return this
    
       }
       navigateCard(){
        cy.findByTestId("quick-card-editor-button").click({force:true});
        cy.wait(1000)

       
    }
    hideCard(){
        cy.findByTestId("quick-card-editor-archive").click();
        cy.wait(1000)
    }
}
export default hideTemplateCardActions;