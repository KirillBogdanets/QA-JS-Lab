'use strict';

const Header = require('../../../support/header.js');

class BarcelonaStatPage {

   constructor (){

   	this.header = new Header();

    this.topBarcaScorer = element(by.xpath('//*[@id="wisfoxbox"]/section[2]/div[1]/table/tbody/tr[1]/td[1]/div/a'));
    this.allBarcaScorers = element.all(by.css('tr[class="wisbb_fullPlayer"]'));

    }
}

module.exports = BarcelonaStatPage;