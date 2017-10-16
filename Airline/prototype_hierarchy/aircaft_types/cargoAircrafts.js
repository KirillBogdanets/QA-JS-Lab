/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 */

const Aircraft = require("./aircrafts");

function CargoAircraft(manufacturer, model, carryingCapacity) {
    Aircraft.call(this,manufacturer, model);

    this.carryingCapacity = carryingCapacity;
}

CargoAircraft.prototype = Object.create(Aircraft.prototype);
CargoAircraft.prototype.constructor = CargoAircraft;

CargoAircraft.prototype.cargoTransportation = function (cargoWeight) {

    if (cargoWeight > this.carryingCapacity) {

        console.error(`${this.manufacturer} ${this.model} isn't able to take off because given cargo is bigger than these aircraft can take with`);
    }
    else if (cargoWeight <= 0){

        console.error(`${this.manufacturer} ${this.model} isn't able to take off because there is invalid cargo weight`);
    }
    else {

        console.log(`The aircraft ${this.manufacturer} ${this.model} is able to take of with ${cargoWeight} cargo's tons on bord`);
    }
};

CargoAircraft.prototype.toString = function () {
    return `manufacturer:${this.manufacturer}, model:${this.model}, carryingCapacity: ${this.carryingCapacity}, maxFlitsLength: ${this.maxFlitsLength}`;
};

module.exports = CargoAircraft;
