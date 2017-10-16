/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 */

const CivilAircraft = require("./civilAircrafts");

function MiddleCivilAircraft(manufacturer, model, passengersSeatsNumber, maxFlitsLength) {

    if (passengersSeatsNumber > 250 || passengersSeatsNumber <0){
        throw new Error("Wrong passengers seats number!!! There are only 250 seats on the light aircraft!");
    } else if (maxFlitsLength > 4000 || maxFlitsLength < 0){
        throw new Error("Wrong max flights length!!! These middle civil aircraft is able to fly not more than 4000!");
    } else {
        CivilAircraft.call(this, manufacturer, model, passengersSeatsNumber);
        this.maxFlitsLength = maxFlitsLength;
    }
}

MiddleCivilAircraft.prototype = Object.create(CivilAircraft.prototype);
MiddleCivilAircraft.prototype.constructor = MiddleCivilAircraft;

MiddleCivilAircraft.prototype.crossCountryFlightable = function (length) {

    return length > this.maxFlitsLength ? false : length >= 0;
};

module.exports = MiddleCivilAircraft;