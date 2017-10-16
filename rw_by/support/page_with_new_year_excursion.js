'use strict';

class NewYearExcursion {
	constructor(){
		this.excursionName = element(by.css("h1[class='page-title']"));
		this.excursionDuration = element(by.cssContainingText("table tr > td", "2 - 6 января  2018г."));
	}
}
module.exports = NewYearExcursion;