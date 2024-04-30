const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl:"https://trello.com/",
    chromeWebSecurity:false,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      
    },
    screenshotsFolder: "cypress/MyscreenShots"
  },
  
 });