'use strict';

class MainBookingPage {
	constructor (){
		this.url = 'https://poezd.rw.by/wps/portal/home/rp';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.buttonForBookingTickets = element(by.linkText("Расписание движения и стоимость проезда"));
    }
}

module.exports = MainBookingPage;
