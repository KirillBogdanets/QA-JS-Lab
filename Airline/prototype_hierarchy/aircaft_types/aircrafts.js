/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 */
function Aircraft(manufacturer, model) {
    this.manufacturer = manufacturer;
    this.model = model;
}

Aircraft.prototype.flying = function () {
    console.log(`The aircraft ${this.manufacturer} ${this.model} is flying now`);
};

Aircraft.prototype.takingOff = function () {
    console.log(`The aircraft ${this.manufacturer} ${this.model} is taking off right now`);
};

Aircraft.prototype.landing = function () {
    console.log(`The aircraft ${this.manufacturer} ${this.model} is landing now`);
};

module.exports = Aircraft;


// function CivilAircraft(manufacturer, model, passengersSeatsNumber){
//     Aircraft.call(this,manufacturer, model);
//
//     this.passengersSeatsNumber = passengersSeatsNumber;
// }
//
// CivilAircraft.prototype = Object.create(Aircraft.prototype);
// CivilAircraft.prototype.constructor = CivilAircraft;
//
// CivilAircraft.prototype.passengersTransportation = function (boardingPassengers) {
//
//     if (boardingPassengers > this.passengersSeatsNumber) {
//
//         console.error(`${this.manufacturer} ${this.model} isn't able to take off because there are too many passengers on board`);
//     }
//     else if (boardingPassengers <= 0){
//
//         console.error(`${this.manufacturer} ${this.model} isn't able to take off because there is no one passenger on board`);
//     }
//     else {
//
//         console.log(`The aircraft ${this.manufacturer} ${this.model} is able to take of with ${boardingPassengers} passengers on board`);
//     }
// };
//
// function CargoAircraft(manufacturer, model, carryingCapacity) {
//     Aircraft.call(this,manufacturer, model);
//
//     this.carryingCapacity = carryingCapacity;
// }
//
// CargoAircraft.prototype = Object.create(Aircraft.prototype);
// CargoAircraft.prototype.constructor = CargoAircraft;
//
// CargoAircraft.prototype.cargoTransportation = function (cargoWeight) {
//
//     if (cargoWeight > this.carryingCapacity) {
//
//         console.error(`${this.manufacturer} ${this.model} isn't able to take off because given cargo is bigger than these aircraft can take with`);
//     }
//     else if (cargoWeight <= 0){
//
//         console.error(`${this.manufacturer} ${this.model} isn't able to take off because there is invalid cargo weight`);
//     }
//     else {
//
//         console.log(`The aircraft ${this.manufacturer} ${this.model} is able to take of with ${cargoWeight} cargo's tons on bord`);
//     }
// };
//
// function LightCivilAircraft(manufacturer, model, passengersSeatsNumber, maxFlitsLength) {
//
//     if (passengersSeatsNumber > 100 || passengersSeatsNumber < 0){
//         console.error("Wrong passengers seats number!!! There are only 100 seats on the light aircraft!");
//     } else if (maxFlitsLength > 1000 || maxFlitsLength < 0){
//         console.error("Wrong max flights length!!! These light civil aircraft is able to fly not more than 1000!");
//     } else {
//         CivilAircraft.call(this, manufacturer, model, passengersSeatsNumber);
//         this.maxFlitsLength = maxFlitsLength;
//     }
// }
//
// LightCivilAircraft.prototype = Object.create(CivilAircraft.prototype);
// LightCivilAircraft.prototype.constructor = LightCivilAircraft;
//
// LightCivilAircraft.prototype.flightable = function (length) {
//
//     return length > this.maxFlitsLength ? false : length >= 0;
// };
//
// function MiddleCivilAircraft(manufacturer, model, passengersSeatsNumber, maxFlitsLength) {
//
//     if (passengersSeatsNumber > 250 || passengersSeatsNumber <0){
//         console.error("Wrong passengers seats number!!! There are only 250 seats on the light aircraft!");
//     } else if (maxFlitsLength > 4000 || maxFlitsLength < 0){
//         console.error("Wrong max flights length!!! These middle civil aircraft is able to fly not more than 4000!");
//     } else {
//         CivilAircraft.call(this, manufacturer, model, passengersSeatsNumber);
//         this.maxFlitsLength = maxFlitsLength;
//     }
// }
//
// MiddleCivilAircraft.prototype = Object.create(CivilAircraft.prototype);
// MiddleCivilAircraft.prototype.constructor = MiddleCivilAircraft;
//
// MiddleCivilAircraft.prototype.crossCountryFlightable = function (length) {
//
//     return length > this.maxFlitsLength ? false : length >= 0;
// };
//
// function HeavyCivilAircraft(manufacturer, model, passengersSeatsNumber, maxFlitsLength) {
//
//     if (passengersSeatsNumber > 700 || passengersSeatsNumber <0){
//         console.error("Wrong passengers seats number!!! There are only 700 seats on the light aircraft!");
//     } else if (maxFlitsLength > 12000 || maxFlitsLength < 0){
//         console.error("Wrong max flights length!!! These heavy civil aircraft is able to fly not more than 12000 km!");
//     } else {
//         CivilAircraft.call(this, manufacturer, model, passengersSeatsNumber);
//         this.maxFlitsLength = maxFlitsLength;
//     }
// }
//
// HeavyCivilAircraft.prototype = Object.create(CivilAircraft.prototype);
// HeavyCivilAircraft.prototype.constructor = HeavyCivilAircraft;
//
// HeavyCivilAircraft.prototype.crossContinentalFlightable = function (length) {
//
//     return length > this.maxFlitsLength ? false : length >= 0;
// };
//
// function LightCargoAircraft(manufacturer, model, carryingCapacity, maxFlitsLength) {
//
//     if (carryingCapacity > 30 || carryingCapacity < 0){
//         console.error("Wrong carrying capacity!!! These aircraft is able to carry not more than 30 ton!");
//     } else if (maxFlitsLength > 1000 || maxFlitsLength < 0){
//         console.error("Wrong max flights length!!! These light cargo aircraft is able to fly not more than 1000 km!");
//     } else {
//         CargoAircraft.call(this, manufacturer, model, carryingCapacity);
//         this.maxFlitsLength = maxFlitsLength;
//     }
// }
//
// LightCargoAircraft.prototype = Object.create(CargoAircraft.prototype);
// LightCargoAircraft.prototype.constructor = LightCargoAircraft;
//
// LightCargoAircraft.prototype.flightableWithCargo = function (length) {
//
//     return length > this.maxFlitsLength ? false : length >= 0;
// };
//
// function MiddleCargoAircraft(manufacturer, model, carryingCapacity, maxFlitsLength) {
//
//     if (carryingCapacity > 100 || carryingCapacity < 0){
//         console.error("Wrong carrying capacity!!! These aircraft is able to carry not more than 100 ton!");
//     } else if (maxFlitsLength > 4000 || maxFlitsLength < 0){
//         console.error("Wrong max flights length!!! These middle cargo aircraft is able to fly not more than 4000 km!");
//     } else {
//         CargoAircraft.call(this, manufacturer, model, carryingCapacity);
//         this.maxFlitsLength = maxFlitsLength;
//     }
// }
//
// MiddleCargoAircraft.prototype = Object.create(CargoAircraft.prototype);
// MiddleCargoAircraft.prototype.constructor = MiddleCargoAircraft;
//
// MiddleCargoAircraft.prototype.crossCountryFlightableWithCargo = function (length) {
//
//     return length > this.maxFlitsLength ? false : length >= 0;
// };
//
// function HeavyCargoAircraft(manufacturer, model, carryingCapacity, maxFlitsLength) {
//
//     if (carryingCapacity > 30 || carryingCapacity < 0){
//         console.error("Wrong carrying capacity!!! These aircraft is able to carry not more than 30 ton!");
//     } else if (maxFlitsLength > 1000 || maxFlitsLength < 0){
//         console.error("Wrong max flights length!!! These light cargo aircraft is able to fly not more than 1000 km!");
//     } else {
//         CargoAircraft.call(this, manufacturer, model, carryingCapacity);
//         this.maxFlitsLength = maxFlitsLength;
//     }
// }
//
// HeavyCargoAircraft.prototype = Object.create(CargoAircraft.prototype);
// HeavyCargoAircraft.prototype.constructor = HeavyCargoAircraft;
//
// HeavyCargoAircraft.prototype.crossContinentalFlightableWithCargo = function (length) {
//
//     return length > this.maxFlitsLength ? false : length >= 0;
// };
//
// module.exports = LightCivilAircraft;
// module.exports = MiddleCivilAircraft;
// module.exports = HeavyCivilAircraft;
//
// module.exports = LightCargoAircraft;
// module.exports = MiddleCargoAircraft;
// module.exports = HeavyCargoAircraft;


