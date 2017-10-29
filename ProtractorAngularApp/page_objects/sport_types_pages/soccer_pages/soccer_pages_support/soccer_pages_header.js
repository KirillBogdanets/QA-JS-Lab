'use strict';

const Header = require('../../../support/header.js');

class SoccerPagesHeader {

   constructor (){

        this.header = new Header();

        this.homeButton = element(by.css("a[title='Soccer Home']"));
        this.scoresButton = element(by.css("a[title='Soccer Scores']"));
        this.schedulesButton = element(by.css("a[title='Soccer Schedules']"));
        this.standingsButton = element(by.css("a[title='LA Liga Standings']"));
        this.wordCupLink = element(by.linkText("World Cup"));
        this.videosButton = element(by.css("a[title='Soccer Videos']"));
        this.cupsDropBox = element(by.css("a[title='Soccer Cups']"));
        this.moreDropBox = element(by.className("narrow menu-item menu-item-has-children section-more hover"));

	}
}

module.exports = SoccerPagesHeader;