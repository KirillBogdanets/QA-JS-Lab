'use strict';

class BelarusianExcursianPage {
	constructor(){
		this.linkToNewYearHolidayExcursion = element(by.css("a[href ='http://www.rw.by/tourism_and_recreation/tours/belor_express/']"));
		this.offeredExcursionDuration = element(by.cssContainingText("table tr > td", "2 - 6 января  2018г."));
	}
}
module.exports = BelarusianExcursianPage;