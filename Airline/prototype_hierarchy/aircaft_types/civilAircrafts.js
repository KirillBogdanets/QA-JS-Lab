/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 */

const Aircraft = require("./aircrafts");

function CivilAircraft(manufacturer, model, passengersSeatsNumber){
    Aircraft.call(this, manufacturer, model);

    this.passengersSeatsNumber = passengersSeatsNumber;
}

CivilAircraft.prototype = Object.create(Aircraft.prototype);
CivilAircraft.prototype.constructor = CivilAircraft;

CivilAircraft.prototype.passengersTransportation = function (boardingPassengers) {

    if (boardingPassengers > this.passengersSeatsNumber) {

        console.error(`${this.manufacturer} ${this.model} isn't able to take off because there are too many passengers on board`);
    }
    else if (boardingPassengers <= 0){

        console.error(`${this.manufacturer} ${this.model} isn't able to take off because there is no one passenger on board`);
    }
    else {

        console.log(`The aircraft ${this.manufacturer} ${this.model} is able to take of with ${boardingPassengers} passengers on board`);
    }
};

CivilAircraft.prototype.toString = function () {
    return `manufacturer:${this.manufacturer}, model:${this.model}, carryingCapacity: ${this.carryingCapacity}, maxFlitsLength: ${this.maxFlitsLength}`;
};

module.exports = CivilAircraft;
