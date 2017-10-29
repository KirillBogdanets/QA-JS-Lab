'use strict';

const SoccerPagesHeader = require('./../soccer_pages_support/soccer_pages_header.js');
const Header = require('../../../support/header.js');

class LaLigaStandingsPage {

   constructor (){

   	this.header = new Header();
    this.soccerPagesHeader = new SoccerPagesHeader();

    this.laLigaTablesFirstPlace = element(by.xpath("//table/tbody/tr[1]/td[1]/a/span[2]"));
    this.allLaLigaTeamsInTheTable = element.all(by.css('tr[class="wisbb_fvStand "]'));

        }
}

module.exports = LaLigaStandingsPage;