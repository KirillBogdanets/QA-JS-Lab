/**
 * Created by Kiryl_Bahdanets on 10/12/2017.
 */

const CargoAircraft = require("./cargoAircrafts");

class HeavyCargoAircraft extends CargoAircraft {

    constructor(manufacturer, model, carryingCapacity, maxFlitsLength){

        super(manufacturer, model, carryingCapacity);

        if (carryingCapacity > 200 || carryingCapacity < 0){
            throw new Error("Wrong carrying capacity!!! These aircraft is able to carry not more than 200 ton!");
        } else if (maxFlitsLength > 12000 || maxFlitsLength < 0){
            throw new Error("Wrong max flights length!!! These light cargo aircraft is able to fly not more than 12000 km!");
        } else {
            this.maxFlitsLength = maxFlitsLength;
        }
    }

    crossContinentalFlightableWithCargo(length){
        return length > this.maxFlitsLength ? false : length >= 0;
    }
}

module.exports = HeavyCargoAircraft;