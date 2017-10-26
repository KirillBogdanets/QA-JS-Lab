/**
 * Created by Kiryl_Bahdanets on 10/26/2017.
 */

const expect = require('chai').expect;

const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.manage().window().maximize();

const world = require('../page_objects/world');

driver.get(world.homePage.homePageUrl).then(() =>{
    return driver.findElement(world.homePage.header.loginButton).click();
}).then(() => {
    return driver.findElement(world.loginPage.emailField).sendKeys("bogdanetskirill@gmail.com");
}).then(() => {
    return driver.findElement(world.loginPage.passwordField).sendKeys("qweasdzxc123");
}).then(() => {
    driver.findElement(world.loginPage.enteringButton).click();
}).then(() =>{
    return driver.wait(driver.findElement(world.homePage.header.habrahabrLogo), 5000);
}).then(() => {
    driver.sleep(1000);
    return driver.findElement(world.homePage.header.habrahabrLogo).click();
}).then(() => {
    return driver.findElement(world.homePage.header.loggedUsersButton).click();
}).then(() => {
    return driver.findElement(world.homePage.header.loggedUsersProfile).getText();
}).then((text) => {
    console.log(text);
});
