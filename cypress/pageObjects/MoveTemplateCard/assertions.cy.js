class moveCardTemplatesAssertions {

        checkThatTemplateIsNotExistInPrevList() {
            cy.findByTestId('quick-card-editor-card-front').should('not.exist');
            return false;
          }
    

 }
 export default moveCardTemplatesAssertions;