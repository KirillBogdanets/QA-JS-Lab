/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 */
const CargoAircraft = require("./cargoAircrafts");

function MiddleCargoAircraft(manufacturer, model, carryingCapacity, maxFlitsLength) {

    if (carryingCapacity > 100 || carryingCapacity < 0){
        throw new Error("Wrong carrying capacity!!! These aircraft is able to carry not more than 100 ton!");
    } else if (maxFlitsLength > 4000 || maxFlitsLength < 0){
        throw new Error("Wrong max flights length!!! These middle cargo aircraft is able to fly not more than 4000 km!");
    } else {
        CargoAircraft.call(this, manufacturer, model, carryingCapacity);
        this.maxFlitsLength = maxFlitsLength;
    }
}

MiddleCargoAircraft.prototype = Object.create(CargoAircraft.prototype);
MiddleCargoAircraft.prototype.constructor = MiddleCargoAircraft;

MiddleCargoAircraft.prototype.crossCountryFlightableWithCargo = function (length) {

    return length > this.maxFlitsLength ? false : length >= 0;
};

module.exports = MiddleCargoAircraft;