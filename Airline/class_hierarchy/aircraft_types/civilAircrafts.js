/**
 * Created by Kiryl_Bahdanets on 10/12/2017.
 */

const Aircraft = require("./aircrafts");

class CivilAircraft extends Aircraft{

    constructor(manufacturer, model, passengersSeatsNumber){

        super(manufacturer, model);
        this.passengersSeatsNumber = passengersSeatsNumber;
    }

    passengersTransportation(boardingPassengers){
        if (boardingPassengers > this.passengersSeatsNumber) {

            console.error(`${this.manufacturer} ${this.model} isn't able to take off because there are too many passengers on board`);
        }
        else if (boardingPassengers <= 0){

            console.error(`${this.manufacturer} ${this.model} isn't able to take off because there is no one passenger on board`);
        }
        else {

            console.log(`The aircraft ${this.manufacturer} ${this.model} is able to take of with ${boardingPassengers} passengers on board`);
        }
    }

    toString(){
        return `manufacturer:${this.manufacturer}, model:${this.model}, passengersSeatsNumber: ${this.passengersSeatsNumber}, maxFlitsLength: ${this.maxFlitsLength}`;
    }
}

module.exports = CivilAircraft;

