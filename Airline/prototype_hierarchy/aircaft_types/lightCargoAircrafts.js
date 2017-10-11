/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 */

const CargoAircraft = require("./cargoAircrafts");

function LightCargoAircraft(manufacturer, model, carryingCapacity, maxFlitsLength) {

    if (carryingCapacity > 30 || carryingCapacity < 0){
        console.error("Wrong carrying capacity!!! These aircraft is able to carry not more than 30 ton!");
    } else if (maxFlitsLength > 1000 || maxFlitsLength < 0){
        console.error("Wrong max flights length!!! These light cargo aircraft is able to fly not more than 1000 km!");
    } else {
        CargoAircraft.call(this, manufacturer, model, carryingCapacity);
        this.maxFlitsLength = maxFlitsLength;
    }
}

LightCargoAircraft.prototype = Object.create(CargoAircraft.prototype);
LightCargoAircraft.prototype.constructor = LightCargoAircraft;

LightCargoAircraft.prototype.flightableWithCargo = function (length) {

    return length > this.maxFlitsLength ? false : length >= 0;
};

module.exports = LightCargoAircraft;
