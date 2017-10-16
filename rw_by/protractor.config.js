
'use strict';
const path = require("path");
exports.config = {
    directConnect: true,
    
    baseUrl: 'http://www.rw.by/',
    capabilities: {
        browserName: 'chrome',
        platform: "macOS Sierra 10.12.6",
        maxDuration: 10800
    },
    specs: [
        './features/**.feature'
    ],
    onPrepare: function () {
        browser.waitForAngularEnabled(false); 
        browser.driver.manage().window().maximize(); 
    },
    cucumberOpts: {
        require: [path.resolve('./step_definitions/**.js')],
        format: ['json:output/cucumber.json'],
        tags: ['@important']
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework')
};