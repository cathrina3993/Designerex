const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6xgi1g',
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "charts": true,
    "reportPageTitle": "Summary Report",
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "html":true,

  },
  "video": false,
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
     chromeWebSecurity: false,
     experimentalRunAllSpecs : true,
     redirectionLimit: 100,
     viewportWidth:1280,
     viewportHeight: 1000,
     defaultCommandTimeout: 10000,
     experimentalSessionAndOrigin: true,
     numTestsKeptInMemory: 0,
     pageLoadTimeout:300000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
     // experimentalWebKitSupport: true,
      require('cypress-mochawesome-reporter/plugin')(on);


    },
  },
  env:{
    "baseurl":"http://staging.designerex.com.au",
    "authname":"staging",
    "authpass":"designer123" ,
    "useremail":"sony@mailinator.com",
    "userpassword":"password",
    "useremail2":"bimba@mailinator.com",
    "userpassword2":"password",
    "userrent":"gine@mailinator.com",
    "newuser":"bella@mailinator.com"
  }
});
