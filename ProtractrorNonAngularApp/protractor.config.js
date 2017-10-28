
'use strict';
const path = require("path");
exports.config = {
    directConnect: true,
    
    baseUrl: 'http://www.rw.by/',
    multiCapabilities: [{
        browserName: 'chrome',
        platform: "macOS Sierra 10.12.6",
        maxDuration: 10800
    }, {
        browserName: 'firefox',
        platform: "macOS Sierra 10.12.6",
        maxDuration: 10800
    }],
    specs: [
        './features/**.feature'
    ],
    onPrepare: function () {
        browser.waitForAngularEnabled(false); 
        browser.driver.manage().window().maximize(); 
    },
    cucumberOpts: {
        require: [path.resolve('./step_definitions/**.js')],
        tags: ['@important']
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework')
};