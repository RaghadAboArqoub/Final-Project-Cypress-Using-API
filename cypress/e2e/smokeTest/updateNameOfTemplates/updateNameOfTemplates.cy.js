/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import updateNameOfTemplatesActions from "../../../pageObjects/updateNameOfTemplates/actions.cy";
import updateNameOfTemplatesAssertions from "../../../pageObjects/updateNameOfTemplates/assertions.cy";
const dataUtils = new sharedDataUtils();
const title = "Template Card";
const boardName = "Test Board";
let boardUrl , boardId ,listId,cardId; 
const listName ="My List";
const updatedCardName="Updated card name"
const updateNameOfTemplatesAction =new updateNameOfTemplatesActions()
const updateNameOfTemplatesAssertion = new updateNameOfTemplatesAssertions()
before(()=>{
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url ; 
        boardId = resp.body.id ; 

        return dataUtils.createList(boardId, listName).then((resp2)=>{
            listId = resp2.body.id ;
           return dataUtils.createTemplateCard(title,listId).then((response)=>{
            cardId=response.body.id;
            })

        })
       

    })
    
    cy.loginToTrello();

});
Given("The user navigate the board",()=>{
    updateNameOfTemplatesAction.openBoard(boardUrl)
});
When("User Can Update Name Of Template",()=>{
updateNameOfTemplatesAction.NavigateCard()
updateNameOfTemplatesAction.editCardName(updatedCardName)

});
Then("The Card template name created successfully",()=>{
updateNameOfTemplatesAssertion.checkCardTempateNameUpated(updatedCardName)
cy.wait(3000)
});


after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})