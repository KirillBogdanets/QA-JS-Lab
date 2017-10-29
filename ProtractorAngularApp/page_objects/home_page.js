"use strict";

const Header = require("./support/header.js");

class HomePage {

    constructor (){

        this.header = new Header();

        this.url = "http://www.foxsports.com/";
        
        this.openPage = function () {
            return browser.get(this.url);
        };
        
        this.allNews = element(by.id("center-piece"));
        this.allLoveTranslations = element(by.css("ul[class='videos']"));
        this.allTopVireos = element(by.css("ul[class='top-videos-playlist'"));
        this.allProductsFromStore = element(by.css("div[class='product'"));
        
    }
}

module.exports = HomePage;