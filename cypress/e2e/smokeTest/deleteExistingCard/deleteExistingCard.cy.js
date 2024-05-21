/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import DeleteCardActions from "../../../pageObjects/deleteExistingCard/actions.cy";
import deleteCardtAssertions from "../../../pageObjects/deleteExistingCard/assertions.cy";
const dataUtils = new sharedDataUtils();

const title = "My Card";
const boardName = "Test Board";
let boardUrl , boardId ,listId ,cardId; 
const listName ="My List";
const deleteCardAction = new DeleteCardActions();
const deleteCardAssertions = new deleteCardtAssertions()

before(()=>{
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url ; 
        boardId = resp.body.id ; 
        listId = resp.body.id ;

        dataUtils.createList(boardId, listName).then((resp2)=>{
            listId = resp2.body.id ;
            dataUtils.createCard(listId,title).then((resp3)=>{
                cardId=resp3.body.id;
            })

        })

    cy.loginToTrello();
})
})
Given("The user navigate the board",()=>{
    deleteCardAction.openBoard(boardUrl)
});

When("The user navigate the card and delete it",()=>{
    deleteCardAction.deleteCard()
    cy.wait(1000)
    cy.screenshot()
});

Then("The card deleted sucessfully",()=>{
    deleteCardAssertions.checkCardNameIsNotVisible()
})

after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})