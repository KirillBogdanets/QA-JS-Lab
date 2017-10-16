/**
 * Created by Kiryl_Bahdanets on 10/12/2017.
 */

const CargoAircraft = require("./cargoAircrafts");

class MiddleCargoAircraft extends CargoAircraft {

    constructor(manufacturer, model, carryingCapacity, maxFlitsLength){

        super(manufacturer, model, carryingCapacity);

        if (carryingCapacity > 100 || carryingCapacity < 0){
            throw new Error("Wrong carrying capacity!!! These aircraft is able to carry not more than 100 ton!");
        } else if (maxFlitsLength > 4000 || maxFlitsLength < 0){
            throw new Error("Wrong max flights length!!! These middle cargo aircraft is able to fly not more than 4000 km!");
        } else {
            this.maxFlitsLength = maxFlitsLength;
        }
    }

    crossCountryFlightableWithCargo(length){
        return length > this.maxFlitsLength ? false : length >= 0;
    }
}

module.exports = MiddleCargoAircraft;