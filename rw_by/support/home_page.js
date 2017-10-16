'use strict';

class HomePage {
	constructor (){
		this.url = 'http://www.rw.by/';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.departureField = element(by.id("acFrom"));
        this.arrivalField = element(by.id("acTo"));
        this.searchButton = element(by.css("span[class='std-button']"));
        this.formInputWorker = function(departurePlace, arrivalPlace){
        	return this.departureField.sendKeys(departurePlace)
        	.then(() => { return this.arrivalField.sendKeys(arrivalPlace); 
        	});
        };
        this.siteMapButton = element(by.linkText("Весь сайт"));
        this.tourismButton = element(by.xpath(".//*[text()='Туризм и отдых']/.."));
        this.linkToTourismPage = element(by.css("a[href ='http://www.rw.by/tourism_and_recreation/']"));
	}
}

module.exports = HomePage;

