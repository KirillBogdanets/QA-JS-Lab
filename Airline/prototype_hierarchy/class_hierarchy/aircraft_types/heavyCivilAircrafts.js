/**
 * Created by Kiryl_Bahdanets on 10/12/2017.
 */

const CivilAircraft = require("./civilAircrafts");

class HeavyCivilAircraft extends CivilAircraft {

    constructor(manufacturer, model, passengersSeatsNumber, maxFlitsLength){

        super(manufacturer, model, passengersSeatsNumber);

        if (passengersSeatsNumber > 700 || passengersSeatsNumber <0){
            throw new Error("Wrong passengers seats number!!! There are only 700 seats on the light aircraft!");
        } else if (maxFlitsLength > 12000 || maxFlitsLength < 0){
            throw new Error("Wrong max flights length!!! These heavy civil aircraft is able to fly not more than 12000 km!");
        } else {
            this.maxFlitsLength = maxFlitsLength;
        }
    }

    crossContinentalFlightable(length){
        return length > this.maxFlitsLength ? false : length >= 0;
    }
}

module.exports = HeavyCivilAircraft;