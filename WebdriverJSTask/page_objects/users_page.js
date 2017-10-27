/**
 * Created by Kiryl_Bahdanets on 10/27/2017.
 */
const webdriver = require('selenium-webdriver');

const Header = require('./support/header');
const Footer = require('./support/footer');

class UsersPage {

    constructor (){

        this.header = new Header();
        this.footer = new Footer();

        this.numberOfAllUsers = webdriver.By.xpath("//li[1]/div/span[2]");
        this.numberOfBoys = webdriver.By.xpath("//li[2]/div/span[2]");
        this.numberOfGirls = webdriver.By.xpath("//li[3]/div/span[2]");
        this.numberOfOthers = webdriver.By.xpath("//li[4]/div/span[2]");
    }
}

module.exports = UsersPage;