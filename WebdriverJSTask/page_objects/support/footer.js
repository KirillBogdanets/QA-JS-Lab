/**
 * Created by Kiryl_Bahdanets on 10/26/2017.
 */

const webdriver = require('selenium-webdriver');


class Footer {

    constructor (){

        this.footerLogin =  webdriver.By.css("a[href='https://habrahabr.ru/auth/login/']");
        this.footerRegistration = webdriver.By.css("a[href='https://habrahabr.ru/auth/register/']");
        this.footerPublications =  webdriver.By.css("a[href='https://habrahabr.ru/posts/top/']");
        this.footerHubs =  webdriver.By.css("a[href='https://habrahabr.ru/hubs/']");
        this.footerCompanies =  webdriver.By.css("a[href='https://habrahabr.ru/companies/']");
        this.footerUsers =  webdriver.By.css("a[href='https://habrahabr.ru/users/']");
        this.footerSandbox =  webdriver.By.css("a[href='https://habrahabr.ru/sandbox/']");
        this.footerAboutSite =  webdriver.By.linkText("О сайте");
        this.footerRules =  webdriver.By.linkText("Правила");
        this.footerHelp =  webdriver.By.linkText("Помощь");
        this.footerAgreements =  webdriver.By.linkText("Соглашение");
        this.footerConfidential =  webdriver.By.linkText("Конфиденциальность");
        this.footerAdvertising =  webdriver.By.css("a[href='https://tmtm.ru/services/advertising/']");
        this.footerCorpBlog =  webdriver.By.css("a[href='https://tmtm.ru/services/corpblog/']");
        this.footerSeminars =  webdriver.By.css("a[href='https://tmtm.ru/workshops/']");
        this.footerSupportService = webdriver.By.linkText("Служба поддержки");
        this.footerMobileVersion =  webdriver.By.linkText("Мобильная версия");
    }
}

module.exports = Footer;