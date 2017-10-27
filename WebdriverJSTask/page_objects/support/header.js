/**
 * Created by Kiryl_Bahdanets on 10/26/2017.
 */

const webdriver = require('selenium-webdriver');

class Header {

    constructor () {

        this.habrahabrLogo =  webdriver.By.css("a[class='logo']");
        this.publications =  webdriver.By.linkText("Публикации");
        this.users =  webdriver.By.linkText("Пользователи");
        this.habs =  webdriver.By.xpath("/a[@href=‘/hubs/’]");
        this.companies =  webdriver.By.linkText("Компании");
        this.senbox =  webdriver.By.linkText("Песочница");
        this.searchButton =  webdriver.By.id("search-form-btn");
        this.loginButton = webdriver.By.id("login");
        this.registrationButton =  webdriver.By.className("btn btn_x-large btn_navbar_registration");
        this.loggedUsersButton = webdriver.By.css("div[class='dropdown dropdown_user']");
        this.loggedUsersProfile = webdriver.By.css("span[class='user-info__nickname']");
        this.tracker = webdriver.By.css("a[title='Трекер']");
    }
}

module.exports =  Header;