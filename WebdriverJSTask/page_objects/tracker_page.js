/**
 * Created by Kiryl_Bahdanets on 10/27/2017.
 */
const webdriver = require('selenium-webdriver');

const Header = require('./support/header');
const Footer = require('./support/footer');

class TrackerPage {

    constructor (){

        this.header = new Header();
        this.footer = new Footer();

        this.trackerPublications = webdriver.By.css("span[class='tabs-menu__item-text tabs-menu__item-text_active']");
        this.trackerSubscribes = webdriver.By.css("a[href='https://habrahabr.ru/tracker/subscribers/']");
        this.trackerMentions = webdriver.By.css("a[href='https://habrahabr.ru/tracker/mentions/']");
        this.trackerApps = webdriver.By.css("a[href='https://habrahabr.ru/tracker/apps/']");
        this.trackerUsersPersonalInfo = webdriver.By.css("a[href='https://habrahabr.ru/tracker/my/']");
        this.trackerUsersNotOnlyPersonalInfo = webdriver.By.css("a[href='https://habrahabr.ru/tracker/']");
        this.trackerUsersInfoOutput = webdriver.By.css("div[class='empty_list']");
    }
}

module.exports = TrackerPage;