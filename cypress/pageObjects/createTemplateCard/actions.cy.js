class createTemplateCardActions{

    openBoard(boardURL){
     cy.visit(boardURL)
    }

    navigateCard(){
        cy.findByTestId("quick-card-editor-button").click({force:true});
        cy.wait(1000)

        cy.findByTestId("quick-card-editor-open-card").click();
        cy.wait(1000)
    }

    makeCardTemplate(){
        cy.contains("span","Make template").click();
    }
 
 }
 export default createTemplateCardActions;