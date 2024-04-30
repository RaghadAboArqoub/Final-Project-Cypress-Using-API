/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
const dataUtils = new sharedDataUtils();
const title = "Template Card";
const boardName = "Test Board";
let boardUrl , boardId ,listId1,cardId,listId2; 
const listName1 ="My List1";
const listName2 ="My List2";
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

When("User Can Move Template To Any List",()=>{
    dataUtils.hideTemplateCard(cardId).then((resp2)=>{
        expect(resp2.status).to.eq(200);
    })
   
});


after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})