/**
 * Created by Kiryl_Bahdanets on 10/26/2017.
 */
const webdriver = require('selenium-webdriver');

const Header = require('./support/header');
const Footer = require('./support/footer');

class HomePage {

    constructor (){

        this.header = new Header();
        this.footer = new Footer();

        this.homePageUrl = 'https://habrahabr.ru/';

        this.allStreamsButton = webdriver.By.className("btn_inner");
        this.bestPublications = webdriver.By.css("span[class='tabs-menu__item-text tabs-menu__item-text_active']");
        this.allPublications = webdriver.By.css("span[class='tabs-menu__item tabs-menu__item_link']");
        this.bestPublicationsPerDay = webdriver.By.css("a[title='Лучшие публикации за сутки']");
        this.bestPublicationsPerWeek = webdriver.By.css("a[title='Лучшие публикации за неделю']");
        this.bestPublicationsPerMonth = webdriver.By.css("a[title='Лучшие публикации за месяц']");
        this.publicationsOnPagaArray = webdriver.By.css("ul[class='content-list content-list_posts shortcuts_items']");

    }
}

module.exports = HomePage;