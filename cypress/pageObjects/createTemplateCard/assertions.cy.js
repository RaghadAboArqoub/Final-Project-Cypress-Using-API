class createTemplateCardAssertions{
    checkThisCardIsTemplateIsVisible(){
        cy.findByTestId('template-card-back-banner').should('be.visible');
        return this;
    }
}
export default createTemplateCardAssertions;