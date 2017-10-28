'use strict';

const expect = require('chai').expect;
const world = require('../support/world');
const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
let excursionDuration = "";

module.exports = function(){

	this.Given(/^I am on Main page$/, () => {
        return browser.wait(EC.visibilityOf(world.homePage.siteMapButton), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I click on button with name "(.*)"$/, (buttonName) => {
    	return world.homePage.siteMapButton.click();
    });

    this.Then(/^I push on button named "(.*)"$/, (buttonName) => {
    	return world.homePage.tourismButton.click();
    });

    this.Then(/^I follow the link with name "(.*)"$/, (linkName) => {
    	return world.homePage.linkToTourismPage.click();
    });

    this.Then(/^I wait until page with offers is loaded$/, () => {
        return browser.wait(EC.visibilityOf(world.tourismPage.linkToBelorusianExcursians), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I follow the link "(.*)"$/, (linkName) => {
    	return world.tourismPage.linkToBelorusianExcursians.click();
    });

    this.Then(/^I wait until page with Belarusian excursions is loaded$/, () => {
        return browser.wait(EC.visibilityOf(world.belarusianExcursianPage.linkToNewYearHolidayExcursion), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I follow the link named "(.*)"$/, (linkName) => {
    	return world.belarusianExcursianPage.offeredExcursionDuration.getText().then((text) => {
    		excursionDuration = text;
    		return world.belarusianExcursianPage.linkToNewYearHolidayExcursion.click();
    	});
    });

    this.Then(/^I wait until page with Belarusian excursion named "(.*)" is loaded$/, (linkName) => {
        return browser.wait(EC.visibilityOf(world.newYearExcursion.excursionName), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I check the correctness of the derived excursion name "(.*)"$/, (excursionsName) => {
        return world.newYearExcursion.excursionName.getText().then((text)=>{
           return expect(text.substr(1, 52)).to.equal(excursionsName);
       });
    });

     this.Then(/^I check the correcness of derived excursion duration$/, () => {
        return world.newYearExcursion.excursionDuration.getText().then((text)=>{
           return expect(text).to.equal(excursionDuration);
       });
    });
}