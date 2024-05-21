/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import createTemplateCardActions from "../../../pageObjects/CreateTemplateCard/actions.cy";
import createTemplateCardAssertions from "../../../pageObjects/CreateTemplateCard/assertions.cy";
const dataUtils = new sharedDataUtils();
const createTemplateCardAction = new createTemplateCardActions()
const createTemplateCardAssertion =new createTemplateCardAssertions()
const title = "Template Card";
const boardName = "Test Board";
let boardUrl , boardId ,listId,cardId; 
const listName ="My List";

before(()=>{
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url ; 
        boardId = resp.body.id ; 
        return dataUtils.createList(boardId,listName).then((resp2)=>{
            listId = resp2.body.id ;
            dataUtils.createCard(listId,title).then((resp3)=>{
                cardId=resp3.body.id;
            })

        })
    })
    cy.loginToTrello();
});

Given("The user navigate the board",()=>{
    createTemplateCardAction.openBoard(boardUrl)
});
When("Navigate the Card and open it",()=>{
createTemplateCardAction.navigateCard()

});
When("The user Make the card as template card",()=>{
    createTemplateCardAction.makeCardTemplate()
});
  Then("The card should be template card",()=>{
    cy.wait(1000)
    createTemplateCardAssertion.checkThisCardIsTemplateIsVisible()
});

after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})