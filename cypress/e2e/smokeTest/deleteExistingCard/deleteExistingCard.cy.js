/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
const dataUtils = new sharedDataUtils();

const title = "My Card";
const boardName = "Test Board";
let boardUrl , boardId ,listId ,cardId; 
const listName ="My List";

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
       

    })
    
    cy.loginToTrello();

});

When("Navigate  and delete the card",()=>{
    cy.visit(boardUrl)
    cy.wait(1000)
    cy.screenshot()

    dataUtils.DeleteCard(cardId).then((response)=>{
        expect(response.status).to.eq(200);
        

    })
});


after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})