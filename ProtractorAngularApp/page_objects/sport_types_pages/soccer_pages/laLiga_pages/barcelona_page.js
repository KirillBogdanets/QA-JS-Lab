'use strict';

const Header = require('../../../support/header.js');

class BarcelonaPage {

   constructor (){

   	this.header = new Header();

    this.barcelonaStat = element(by.xpath('//*[@id="big-board-soccer-nav"]/ul/li[3]/a'));

        }
}

module.exports = BarcelonaPage;