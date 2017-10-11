/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 */
const CivilAircraft = require("./civilAircrafts");

function HeavyCivilAircraft(manufacturer, model, passengersSeatsNumber, maxFlitsLength) {

    if (passengersSeatsNumber > 700 || passengersSeatsNumber <0){
        console.error("Wrong passengers seats number!!! There are only 700 seats on the light aircraft!");
    } else if (maxFlitsLength > 12000 || maxFlitsLength < 0){
        console.error("Wrong max flights length!!! These heavy civil aircraft is able to fly not more than 12000 km!");
    } else {
        CivilAircraft.call(this, manufacturer, model, passengersSeatsNumber);
        this.maxFlitsLength = maxFlitsLength;
    }
}

HeavyCivilAircraft.prototype = Object.create(CivilAircraft.prototype);
HeavyCivilAircraft.prototype.constructor = HeavyCivilAircraft;

HeavyCivilAircraft.prototype.crossContinentalFlightable = function (length) {

    return length > this.maxFlitsLength ? false : length >= 0;
};

module.exports = HeavyCivilAircraft;