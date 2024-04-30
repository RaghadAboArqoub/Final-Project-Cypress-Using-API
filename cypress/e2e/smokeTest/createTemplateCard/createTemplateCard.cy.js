/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
const dataUtils = new sharedDataUtils();
const title = "Template Card";
const boardName = "Test Board";
let boardUrl , boardId ,listId; 
const listName ="My List";

before(()=>{
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url ; 
        boardId = resp.body.id ; 
        return dataUtils.createList(boardId,listName).then((resp2)=>{
            listId = resp2.body.id ;
        })
    })
    cy.loginToTrello();
});

When("User Can Create New Template Card Template",()=>{
  dataUtils.createTemplateCard(title,listId).then((response)=>{
    expect(response.status).to.eq(200);

})
});

after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})