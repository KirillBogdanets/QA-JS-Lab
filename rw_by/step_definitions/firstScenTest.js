'use strict';

const expect = require('chai').expect;
const world = require('../support/world');
const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const expectedPageTitle = "Расписание движения поездов";

module.exports = function () {


    this.Given(/^I am on Home page$/, () => {
        return world.homePage.openPage();
    });

    this.Then(/^I enter valid departure place "(.*)" and valid arrival place "(.*)" into the fields$/, (departurePlace, arrivalPlace) => {
        return world.homePage.formInputWorker(departurePlace, arrivalPlace);
    });

    this.Then(/^I push the button named "(.*)"$/, (buttonName) => {
        return world.homePage.searchButton.click();
    });

    this.Then(/^I wait page loaded$/, () => {
        return browser.wait(EC.visibilityOf(world.schedulePage.routersTable), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^Page url should begin with "(.*)"$/, (title) => {
        return browser.getTitle().then((text)=>{
           return expect(text).to.equal(title);
       });
    });
};
