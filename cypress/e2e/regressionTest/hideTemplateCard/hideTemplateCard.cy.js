/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import hideTemplateCardActions from "../../../pageObjects/hideTemplateCard/actions.cy";
const dataUtils = new sharedDataUtils();
const title = "Template Card";
const boardName = "Test Board";
let boardUrl , boardId ,listId,cardId; 
const listName ="My List";
const hideTemplateCardAction = new hideTemplateCardActions()
before(()=>{
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url ; 
        boardId = resp.body.id ; 
            return dataUtils.createList(boardId, listName).then((resp2)=>{
                listId = resp2.body.id ;
                return dataUtils.createTemplateCard(title,listId).then((resp2)=>{
                    cardId=resp2.body.id;
                })
        })
    })
    cy.loginToTrello();
});
Given("The user navigate the board",()=>{
       hideTemplateCardAction.openBoard(boardUrl)
    
});
When("User Can Hide Template From List",()=>{
    hideTemplateCardAction.navigateCard()
    hideTemplateCardAction.hideCard()

});

Then("The Card hide Sucessfully",()=>{
  
});
after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})