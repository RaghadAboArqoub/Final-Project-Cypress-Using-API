Feature: User Can Move Template To Any List
# //login
# //Create board 
# //Create List
# //Create card 

Scenario: User Can Move Template To Any List
  Given The user navigate the board
  When The user Navigate the card 
  And User Can Move Template To New List 
  Then The card moved successfully 
