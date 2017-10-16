/**
 * Created by Kiryl_Bahdanets on 10/12/2017.
 */

const CivilAircraft = require("./civilAircrafts");

class MiddleCivilAircraft extends CivilAircraft {

    constructor(manufacturer, model, passengersSeatsNumber, maxFlitsLength){

        super(manufacturer, model, passengersSeatsNumber);

        if (passengersSeatsNumber > 250 || passengersSeatsNumber <0){
            throw new Error("Wrong passengers seats number!!! There are only 250 seats on the light aircraft!");
        } else if (maxFlitsLength > 4000 || maxFlitsLength < 0){
            throw new Error("Wrong max flights length!!! These middle civil aircraft is able to fly not more than 4000!");
        } else {
            this.maxFlitsLength = maxFlitsLength;
        }
    }

    crossCountryFlightable(length){
        return length > this.maxFlitsLength ? false : length >= 0;
    }
}

module.exports = MiddleCivilAircraft;