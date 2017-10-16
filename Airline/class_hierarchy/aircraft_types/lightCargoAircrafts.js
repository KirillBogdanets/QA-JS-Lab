/**
 * Created by Kiryl_Bahdanets on 10/12/2017.
 */
const CargoAircraft = require("./cargoAircrafts");

class LightCargoAircraft extends CargoAircraft{

    constructor(manufacturer, model, carryingCapacity, maxFlitsLength){

        super(manufacturer, model, carryingCapacity);

        if (carryingCapacity > 30 || carryingCapacity < 0){
            throw new Error(`Wrong carrying capacity!!! These aircraft '${manufacturer} ${model}' is able to carry not more than 30 ton!`);
        } else if (maxFlitsLength > 1000 || maxFlitsLength < 0){
            throw new Error(`Wrong max flights length!!! These light cargo aircraft ${this.manufacturer} ${this.model} is able to fly not more than 1000 km!`);
        } else {
            this.maxFlitsLength = maxFlitsLength;
        }
    }

    flightableWithCargo(length){
        return length > this.maxFlitsLength ? false : length >= 0;
    }
}

module.exports = LightCargoAircraft;