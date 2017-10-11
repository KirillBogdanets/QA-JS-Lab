/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 */

const fs = require('fs');
const LightCivilAircraft = require("./aircaft_types/lightCivilAircrafts");
const MiddleCivilAircraft = require("./aircaft_types/middleCivilAircrafts");
const HeavyCivilAircraft = require("./aircaft_types/heavyCivilAircrafts");

const LightCargoAircraft = require("./aircaft_types/lightCargoAircrafts");
const MiddleCargoAircraft = require("./aircaft_types/middleCargoAircrafts");
const HeavyCargoAircraft = require("./aircaft_types/heavyCargoAircraft");
const CivilAircraft = require("./aircaft_types/civilAircrafts");
const CargoAircraft = require("./aircaft_types/cargoAircrafts");


function Airline(name) {
    this.name = name;
}

Airline.prototype.readFilePromise = function (filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err){
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};

Airline.prototype.aircraftsArrayCreation = function (airStr) {

    let arrayWithAllAircraftsFromFile = [];
    const stringArray = airStr.split("\n");

    stringArray.forEach((value) => {

        let arr = value.split(",");

        switch (arr[0].toLowerCase()) {
            case "lightcivilaircraft":
                arrayWithAllAircraftsFromFile.push(new LightCivilAircraft(arr[1],arr[2],parseInt(arr[3]),parseInt(arr[4])));
                break;
            case "middlecivilaircraft":
                arrayWithAllAircraftsFromFile.push(new MiddleCivilAircraft(arr[1],arr[2],parseInt(arr[3]),parseInt(arr[4])));
                break;
            case "heavycivilaircraft":
                arrayWithAllAircraftsFromFile.push(new HeavyCivilAircraft(arr[1],arr[2],parseInt(arr[3]),parseInt(arr[4])));
                break;
            case "lightcargoaircraft":
                arrayWithAllAircraftsFromFile.push(new LightCargoAircraft(arr[1],arr[2],parseInt(arr[3]),parseInt(arr[4])));
                break;
            case "middlecargoaircraft":
                arrayWithAllAircraftsFromFile.push(new MiddleCargoAircraft(arr[1],arr[2],parseInt(arr[3]),parseInt(arr[4])));
                break;
            case "heavycargoaircraft":
                arrayWithAllAircraftsFromFile.push(new HeavyCargoAircraft(arr[1],arr[2],parseInt(arr[3]),parseInt(arr[4])));
                break;
        }
    });

 return arrayWithAllAircraftsFromFile;
};

Airline.prototype.totalAircraftsInfo = function (arrayWithAllAircrafts) {
    let totalPassengers = 0;
    let totalCargo = 0;
    arrayWithAllAircrafts.forEach((value) =>{
        if(value instanceof CivilAircraft){
            totalPassengers += value.passengersSeatsNumber;
        } else {
            totalCargo += value.carryingCapacity;
        }
    });
    console.log(`Total number of possible transported passengers in the ${this.name} Airline: ${totalPassengers}\nTotal number of possible carried cargo in the ${this.name} Airline: ${totalCargo}`);
};

Airline.prototype.aircraftsSorter = function (arrayWithAllAircrafts) {

    let a = arrayWithAllAircrafts.sort((first, second) => {

        if (first.maxFlitsLength === second.maxFlitsLength){
            return 0;
        } else if (first.maxFlitsLength < second.maxFlitsLength){
            return -1;
        } else if (first.maxFlitsLength > second.maxFlitsLength) {
            return 1;
        }
    });

    console.log(`\nHere are all sorted by max flights length '${this.name}' aircrafts:\n${a.join("\n")}\n`);
    return a;
};

Airline.prototype.rangeValuesWorker = function (arrayWithAllAircrafts, firstValue, secondValue) {

    let aircraftsInRange = "";

    arrayWithAllAircrafts.forEach((value) => {

       if (value.maxFlitsLength > firstValue && value.maxFlitsLength < secondValue){
           aircraftsInRange += `${value}\n`;
       }
    });
    console.log(`Here are all '${this.name}' aircrafts which correspond to a range of values:\n${aircraftsInRange}`);
    return aircraftsInRange;
};

let a = new Airline("Domodedovo");
a.readFilePromise("./Aircrafts.txt")
    .then((data) =>{
        let arr = a.aircraftsArrayCreation(data);
        a.totalAircraftsInfo(arr);
        a.rangeValuesWorker(a.aircraftsSorter(arr),300,2500);
    });




