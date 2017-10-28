'use strict';

class RoutingPageForBookingTickets {
	constructor (){

		this.departureField = element(by.id("viewns_Z7_9HD6HG80NOK1E0ABJMNO3H30S1_:form1:textDepStat"));
        this.arrivalField = element(by.id("viewns_Z7_9HD6HG80NOK1E0ABJMNO3H30S1_:form1:textArrStat"));
        this.dateField = element(by.id("viewns_Z7_9HD6HG80NOK1E0ABJMNO3H30S1_:form1:dob"));
        this.bookingOnlyByInternetVerification = element(by.id("viewns_Z7_9HD6HG80NOK1E0ABJMNO3H30S1_:form1:onlyER"));
        this.searchButton = element(by.id("viewns_Z7_9HD6HG80NOK1E0ABJMNO3H30S1_:form1:buttonSearch"));

        this.dataInputWorker = function(departurePlace, arrivalPlace, departureDay){
        	return this.departureField.sendKeys(departurePlace)
        	.then(() => { return this.arrivalField.sendKeys(arrivalPlace); })
        	.then(() => { return this.dateField.clear().sendKeys(departureDay); }) 
        };
	}
}
module.exports = RoutingPageForBookingTickets;