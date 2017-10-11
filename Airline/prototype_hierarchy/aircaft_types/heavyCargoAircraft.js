/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 */

const CargoAircraft = require("./cargoAircrafts");

function HeavyCargoAircraft(manufacturer, model, carryingCapacity, maxFlitsLength) {

    if (carryingCapacity > 200 || carryingCapacity < 0){
        console.error("Wrong carrying capacity!!! These aircraft is able to carry not more than 200 ton!");
    } else if (maxFlitsLength > 12000 || maxFlitsLength < 0){
        console.error("Wrong max flights length!!! These light cargo aircraft is able to fly not more than 12000 km!");
    } else {
        CargoAircraft.call(this, manufacturer, model, carryingCapacity);
        this.maxFlitsLength = maxFlitsLength;
    }
}

HeavyCargoAircraft.prototype = Object.create(CargoAircraft.prototype);
HeavyCargoAircraft.prototype.constructor = HeavyCargoAircraft;

HeavyCargoAircraft.prototype.crossContinentalFlightableWithCargo = function (length) {

    return length > this.maxFlitsLength ? false : length >= 0;
};

module.exports = HeavyCargoAircraft;
