/**
 * Created by Kiryl_Bahdanets on 10/12/2017.
 */
class Aircraft{
    constructor(manufacturer, model){
        this.manufacturer = manufacturer;
        this.model = model;
    }

    flying(){
        console.log(`The aircraft ${this.manufacturer} ${this.model} is flying now`);
    }
    takingOff(){
        console.log(`The aircraft ${this.manufacturer} ${this.model} is taking off right now`);
    }
    landing(){
        console.log(`The aircraft ${this.manufacturer} ${this.model} is landing now`);
    }
}

module.exports = Aircraft;