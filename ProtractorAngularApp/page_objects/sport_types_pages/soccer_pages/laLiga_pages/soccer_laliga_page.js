'use strict';

const SoccerPagesHeader = require('./../soccer_pages_support/soccer_pages_header.js');
const Header = require('../../../support/header.js');

class SoccerLaLigaPage {

   constructor (){

        this.header = new Header();
        this.soccerPagesHeader = new SoccerPagesHeader();

        this.homeLaLigaButton = element(by.css("a[title='LA Liga Home']"));
        this.scoresLaLigaButton = element(by.css("a[title='LA Liga Scores']"));
        this.schedulesLaLigaButton = element(by.css("a[title='LA Liga Schedule']"));
        this.standingsLaLigaButton = element(by.css("a[title='LA Liga Standings']"));
        this.statsLaLigaButton = element(by.css("a[title='LA Liga Stats']"));
        this.oddsLaLigaButton = element(by.css("a[title='LA Liga Odds']"));
        this.laLigaNews = element(by.css("article[class='trending-item hentry ']"));

        }
}

module.exports = SoccerLaLigaPage;