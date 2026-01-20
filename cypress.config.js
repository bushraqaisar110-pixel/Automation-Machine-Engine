const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.matchingengine.com',
    chromeWebSecurity: false,

    screenshotsFolder: 'mathingengineSS/screenshots',
    videosFolder: 'mathingengine/videos',
    screenshotOnRunFailure: true,
    video: true,

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    }
  }
});
