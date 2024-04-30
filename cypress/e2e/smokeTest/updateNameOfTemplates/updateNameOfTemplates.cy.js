/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
const dataUtils = new sharedDataUtils();
const title = "Template Card";
const boardName = "Test Board";
let boardUrl , boardId ,listId,cardId; 
const listName ="My List";
const updatedCardName="Updated card name"

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

When("User Can Update Name Of Template",()=>{
dataUtils.updateNameOfTemplateCard(updatedCardName,cardId).then(response=>{
    expect(response.status).to.eq(200);
    expect(response.body.name).to.eq(updatedCardName);
}   )

});


after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})