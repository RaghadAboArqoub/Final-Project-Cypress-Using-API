/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import moveCardTemplatesActions from "../../../pageObjects/MoveTemplateCard/Actions.cy";
import moveCardTemplatesAssertions from "../../../pageObjects/MoveTemplateCard/assertions.cy";
const dataUtils = new sharedDataUtils();
const title = "Template Card";
const boardName = "Test Board";
let boardUrl , boardId ,listId1,cardId,listId2; 
const listName1 ="My List1";
const listName2 ="My List2";
const moveCardTemplatesAction = new moveCardTemplatesActions()
const moveCardTemplatesAssertion = new moveCardTemplatesAssertions()
before(()=>{
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url ; 
        boardId = resp.body.id ; 
            return dataUtils.createList(boardId, listName2).then((resp2)=>{
                listId2 = resp2.body.id ;
                return dataUtils.createTemplateCard(title,listId2).then((resp2)=>{
                    cardId=resp2.body.id;
                })
        
   

        })
       

    })
    
    cy.loginToTrello();
});

Given("The user navigate the board",()=>{
   moveCardTemplatesAction.openBoard(boardUrl)
   
});
When("The user Navigate the card",()=>{
   moveCardTemplatesAction.NavigateCard()
   
});
When("User Can Move Template To New List",()=>{
   moveCardTemplatesAction.moveCardtoAnotherList()
});
Then("The card moved successfully",()=>{
  moveCardTemplatesAssertion.checkThatTemplateIsNotExistInPrevList()
});
// after(()=>{
//     cy.wait(3000)
//     dataUtils.deleteBoard(boardId)
// })