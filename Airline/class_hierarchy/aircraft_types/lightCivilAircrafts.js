/**
 * Created by Kiryl_Bahdanets on 10/12/2017.
 */

const CivilAircraft = require("./civilAircrafts");

class LightCivilAircraft extends CivilAircraft {

    constructor(manufacturer, model, passengersSeatsNumber, maxFlitsLength){

        super(manufacturer, model, passengersSeatsNumber);

        if (passengersSeatsNumber > 100 || passengersSeatsNumber < 0){
            throw new Error("Wrong passengers seats number!!! There are only 100 seats on the light aircraft!");

        } else if (maxFlitsLength > 1000 || maxFlitsLength < 0){
            throw new Error("Wrong max flights length!!! These light civil aircraft is able to fly not more than 1000!");

        } else {
            this.maxFlitsLength = maxFlitsLength;
        }
    }

    flightable(length){
        return length > this.maxFlitsLength ? false : length >= 0;
    }
}

module.exports = LightCivilAircraft;