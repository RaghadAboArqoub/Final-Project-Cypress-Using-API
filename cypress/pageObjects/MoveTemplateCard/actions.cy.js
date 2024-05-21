class moveCardTemplatesActions {
    openBoard(boardURL){
     cy.visit(boardURL)
     return this
 
    }
    NavigateCard(){
        cy.findByTestId("quick-card-editor-button").click({force:true})
        cy.wait(1000)
    }
    moveCardtoAnotherList(){
        cy.findByTestId("quick-card-editor-move").click()
        cy.wait(1000)
        // cy.get('.css-ufz0vj-control').click({multiple:true});

        // cy.wait(1000)

        cy.get('[data-testid="move-card-popover-select-list-destination"] .css-1og2rpm').click()

        
        // Click on the second option assuming "Doing" is the second item
        cy.get("#react-select-3-option-2").contains("li","Doing").click({force:true});    
        cy.findByTestId("move-card-popover-move-button").click()
        cy.wait(1000)


    }

 }
 export default moveCardTemplatesActions;