class deleteCardtAssertions {
    

    checkCardNameIsNotVisible(){
        cy.findByTestId('list-card').should('not.exist');
        return this;
        
    }
}
export default deleteCardtAssertions;
