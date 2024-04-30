import { APIKey , APIToken } from "../../support/constants.cy"
class sharedDataUtils{

    createBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }
   

    createList = (boardId,listName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${APIKey}&token=${APIToken}`)
    }
    createCard =(listId,cardTitle)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?key=${APIKey}&token=${APIToken}&name=${cardTitle}&idList=${listId}`)
    }
    DeleteCard=(cardId)=>{

        return cy.request("DELETE",`https://api.trello.com/1/cards/${cardId}?key=${APIKey}&token=${APIToken}`)

    }
    createTemplateCard=(templateCardname, targetListId)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?key=${APIKey}&token=${APIToken}&name=${templateCardname}&idList=${targetListId}&isTemplate=true`)
    }
    updateNameOfTemplateCard=(updatedtemplateCardname,cardTemplateId)=>{
        
        return cy.request("PUT",`https://api.trello.com/1/cards/${cardTemplateId}?key=${APIKey}&token=${APIToken}&name=${updatedtemplateCardname}`)

    }
    moveTemplateCard=(templateCardId, newListId)=>{
        return cy.request("PUT",`https://api.trello.com/1/cards/${templateCardId}?key=${APIKey}&token=${APIToken}&idList=${newListId}`)
    }
    hideTemplateCard=(templateCardId)=>{
        return cy.request("PUT",`https://api.trello.com/1/cards/${templateCardId}?key=${APIKey}&token=${APIToken}&closed=true`)

    }
    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }
}

export default sharedDataUtils;