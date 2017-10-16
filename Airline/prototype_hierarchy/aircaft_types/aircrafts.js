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


