/**
 * Created by Kiryl_Bahdanets on 10/11/2017.
 * module for creating new airline and, reading file with all aircrafts and making statistic
 */

const fs = require('fs');
const LightCivilAircraft = require("./aircaft_types/lightCivilAircrafts");
const MiddleCivilAircraft = require("./aircaft_types/middleCivilAircrafts");
const HeavyCivilAircraft = require("./aircaft_types/heavyCivilAircrafts");

const LightCargoAircraft = require("./aircaft_types/lightCargoAircrafts");
const MiddleCargoAircraft = require("./aircaft_types/middleCargoAircrafts");
const HeavyCargoAircraft = require("./aircaft_types/heavyCargoAircraft");
const CivilAircraft = require("./aircaft_types/civilAircrafts");

function Airline(name) {
    this.name = name;
}

/**
 * function for reading file with all aircraft for future work
 * @param filename with all aircraft
 * @returns {Promise}
 */
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

/**
 * function for creating and returning new Array with aircraft types objects inside
 * @param airStr String with all companies aircraft
 * @returns {Array}
 */
Airline.prototype.aircraftsArrayCreation = function (airStr) {

    let arrayWithAllAircraftsFromFile = [];
    const stringArray = airStr.split("\n");

    stringArray.forEach((value) => {

        let arr = value.split(",");
        try {
            switch (arr[0].toLowerCase()) {
                case "lightcivilaircraft":
                    arrayWithAllAircraftsFromFile.push(new LightCivilAircraft(arr[1], arr[2], parseInt(arr[3]), parseInt(arr[4])));
                    break;
                case "middlecivilaircraft":
                    arrayWithAllAircraftsFromFile.push(new MiddleCivilAircraft(arr[1], arr[2], parseInt(arr[3]), parseInt(arr[4])));
                    break;
                case "heavycivilaircraft":
                    arrayWithAllAircraftsFromFile.push(new HeavyCivilAircraft(arr[1], arr[2], parseInt(arr[3]), parseInt(arr[4])));
                    break;
                case "lightcargoaircraft":
                    arrayWithAllAircraftsFromFile.push(new LightCargoAircraft(arr[1], arr[2], parseInt(arr[3]), parseInt(arr[4])));
                    break;
                case "middlecargoaircraft":
                    arrayWithAllAircraftsFromFile.push(new MiddleCargoAircraft(arr[1], arr[2], parseInt(arr[3]), parseInt(arr[4])));
                    break;
                case "heavycargoaircraft":
                    arrayWithAllAircraftsFromFile.push(new HeavyCargoAircraft(arr[1], arr[2], parseInt(arr[3]), parseInt(arr[4])));
                    break;
            }
        } catch (err){
            console.log(err.message);
        }
    });

 return arrayWithAllAircraftsFromFile;
};


/**
 * function for outputting airline's info about total number of possible transported passengers and total number of possible carried cargo
 * @param arrayWithAllAircrafts Array with aircraft types objects inside
 */
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

/**
 * function for sorting given array by aircraft's max flights length
 * @param arrayWithAllAircrafts Array with aircraft types objects inside
 * @returns {Array.<Aircrafts>}
 */
Airline.prototype.aircraftsSorter = function (arrayWithAllAircrafts) {

    let sortedArray = arrayWithAllAircrafts.sort((first, second) => {

        if (first.maxFlitsLength === second.maxFlitsLength){
            return 0;
        } else if (first.maxFlitsLength < second.maxFlitsLength){
            return -1;
        } else if (first.maxFlitsLength > second.maxFlitsLength) {
            return 1;
        }
    });

    console.log(`\nHere are all sorted by max flights length '${this.name}' aircrafts:\n${sortedArray.join("\n")}\n`);
    return sortedArray;
};

/**
 * function for searching aircraft which will correspond to a given range of max flights length values
 * @param arrayWithAllAircrafts Array with aircraft types objects inside
 * @param firstValue param from command line that gives first value in range
 * @param secondValue param from command line that gives second value in range
 */
Airline.prototype.rangeValuesWorker = function (arrayWithAllAircrafts, firstValue, secondValue) {

    let aircraftsInRange = "";

    arrayWithAllAircrafts.forEach((value) => {

       if (value.maxFlitsLength > firstValue && value.maxFlitsLength < secondValue){
           aircraftsInRange += `${value}\n`;
       }
    });

    if (aircraftsInRange.length === 0){
        console.log(`There are no one aircraft in given range of max flights length values from '${firstValue}'km to '${secondValue}'km`);
    } else {
        console.log(`Here are all '${this.name}' aircrafts which correspond to a given range of max flights length values from '${firstValue}'km to '${secondValue}'km:\n${aircraftsInRange}`);
    }
};

let airline = new Airline("BelAvia");
airline.readFilePromise("./Aircrafts.txt")
    .then((data) =>{
        let arr = airline.aircraftsArrayCreation(data);
        airline.totalAircraftsInfo(arr);
        airline.rangeValuesWorker(airline.aircraftsSorter(arr),process.argv[2],process.argv[3]);
    });




