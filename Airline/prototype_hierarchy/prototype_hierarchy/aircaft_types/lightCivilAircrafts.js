/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 */

const CivilAircraft = require("./civilAircrafts");

function LightCivilAircraft(manufacturer, model, passengersSeatsNumber, maxFlitsLength) {

    if (passengersSeatsNumber > 100 || passengersSeatsNumber < 0){
        throw new Error("Wrong passengers seats number!!! There are only 100 seats on the light aircraft!");
    } else if (maxFlitsLength > 1000 || maxFlitsLength < 0){
        throw new Error("Wrong max flights length!!! These light civil aircraft is able to fly not more than 1000!");
    } else {
        CivilAircraft.call(this, manufacturer, model, passengersSeatsNumber);
        this.maxFlitsLength = maxFlitsLength;
    }
}

LightCivilAircraft.prototype = Object.create(CivilAircraft.prototype);
LightCivilAircraft.prototype.constructor = LightCivilAircraft;

LightCivilAircraft.prototype.flightable = function (length) {

    return length > this.maxFlitsLength ? false : length >= 0;
};

module.exports = LightCivilAircraft;
