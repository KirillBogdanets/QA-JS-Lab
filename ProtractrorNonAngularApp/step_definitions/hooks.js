'use strict';
const world = require('../support/world');

module.exports = function () {
    const DEFAULT_STEP_TIMEOUT = 60 * 1000;
    this.setDefaultTimeout(DEFAULT_STEP_TIMEOUT);
    const EC = protractor.ExpectedConditions;

    this.Before({tags: ['@PrepearedStatementForHomePage']}, () => {

        return world.homePage.openPage();

    });

    this.After({tags: ['@PrepearedStatementForHomePage']}, () => {
        
           return browser.executeScript('window.scrollTo(0,document.body.scrollHeight)')
            
            .then(() => {

                console.log("Go down");
                return browser.sleep(2000);

            }).then(() => {

                console.log("Go up");
                return browser.executeScript('window.scrollTo(0, 0)');

            }).then(() => {
               
               console.log("The End.")
                return browser.sleep(2000);
            });

    });

};