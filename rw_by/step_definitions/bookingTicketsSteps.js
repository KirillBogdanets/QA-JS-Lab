'use strict';

const expect = require('chai').expect;
const world = require('../support/world');
const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const departurePlace = "МИНСК";
const arrivalPlace = "БРЕСТ";
const departureDate = "22.10.2017";

module.exports = function () {

	this.Given(/^I am on booking tickets app Home page$/, () => {
        return world.mainBookingPage.openPage();
    });

    this.Then(/^I click on button named "(.*)"$/, (buttonName) => {
    	return world.mainBookingPage.buttonForBookingTickets.click();
    });

    this.Then(/^I wait until routing page for booking tickets is loaded$/, () => {
        return browser.wait(EC.visibilityOf(world.routingPageForBookingTickets.departureField), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I enter departure place "(.*)", arrival place "(.*)" and departure date "(.*)" into necessary fields$/, (departurePlace, arrivalPlace, departureDate) => {
    	return world.routingPageForBookingTickets.dataInputWorker(departurePlace,arrivalPlace,departureDate);
    });

    this.Then(/^I click on check box for searching trains only with ability to book tickets by internet$/, () => {
    	return world.routingPageForBookingTickets.bookingOnlyByInternetVerification.click();
    });

    this.Then(/^I push the button which named "(.*)"$/, (buttonName) => {
    	return world.routingPageForBookingTickets.searchButton.click();
    });

    this.Then(/^I wait until proposed results page is loaded$/, () => {
        return browser.wait(EC.visibilityOf(world.proposedResultsPage.firstTrain), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I choose first train$/, () => {
        return world.proposedResultsPage.firstTrain.click();
    });

    this.Then(/^I wait until page for booking tickets is loaded$/, () => {
        return browser.wait(EC.visibilityOf(world.pageForBookingTickets.buttonForBookingTickets), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I push the button with name "(.*)"$/, (buttonName) => {
        return world.pageForBookingTickets.buttonForBookingTickets.click();
    });

    this.Then(/^I wait until login page is loaded$/, () => {
        return browser.wait(EC.visibilityOf(world.loginPage.loginField), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I enter prepared user name "(.*)" and user's password "(.*)" into the fields$/, (usersLogin, usersPassword) => {
    	return world.loginPage.userLoginWorker(usersLogin, usersPassword);
    });

    this.Then(/^I click on the button named "(.*)"$/, (buttonName) => {
    	return world.loginPage.confirmButton.click();
    });

    this.Then(/^I wait until confirming rules page is loaded$/, () => {
        return browser.wait(EC.visibilityOf(world.confirmingRulesPage.confirmingCheckBox), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I push the button confirming that I agree with rules$/, () => {
        return world.confirmingRulesPage.confirmingCheckBox.click();
    });

    this.Then(/^I wait until page with user's data is loaded$/, () => {
        return browser.wait(EC.visibilityOf(world.userInfoPage.itineraryField), DEFAULT_STEP_TIMEOUT);
    });

    this.Then(/^I check the correctness of the entered route$/, () => {
        return world.userInfoPage.itineraryField.getText()
        .then((text) => { return expect(text).to.equal(`${departurePlace} - ${arrivalPlace}`);
        });
    });

    this.Then(/^I check the correctness of the entered departure date$/, () => {
        return world.userInfoPage.departureDayField.getText()
        .then((text) => { return expect(text).to.equal(`${departureDate}`);
        });
    });

    this.After({tags: ['@logout']}, () => {
    	return browser.sleep(3000);
    });

};
