
'use strict';
const path = require("path");
exports.config = {

    baseUrl: 'http://www.foxsports.com/',

    multiCapabilities: [{
        browserName: 'chrome',
        platform: "macOS Sierra 10.12.6",
        maxDuration: 10800
    }, {
        browserName: 'firefox',
        platform: "macOS Sierra 10.12.6",
        maxDuration: 10800
    }, {
        browserName: 'internet explorer',
        'platform': 'ANY',
        'version': '11'
    }],
    specs: [
        './tests/*[Tt]st.js'
    ],
    onPrepare: function () {
        browser.waitForAngularEnabled(false); 
        browser.driver.manage().window().maximize(); 
    },
    jasmineNodeOpts: {
    showColors: true 
    },

    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
};