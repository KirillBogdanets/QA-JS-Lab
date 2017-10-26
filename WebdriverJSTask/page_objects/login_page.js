/**
 * Created by Kiryl_Bahdanets on 10/26/2017.
 */
const webdriver = require('selenium-webdriver');

class LoginPage {

    constructor (){

        this.emailField = webdriver.By.id("email_field");
        this.passwordField = webdriver.By.css("input[name='password']");
        this.enteringButton = webdriver.By.css("button[class='button big green wide ']");

    }
}

module.exports = LoginPage;