const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.northerntrailoutfitters.com/default/homepage',
    // "reporter": "cypress-allure-plugin",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
