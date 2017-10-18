/**
 * Created by Kiryl_Bahdanets on 10/18/2017.
 */

const fs = require('fs');
const argv = require('yargs').argv;
let jsonObj = {};

if (fs.existsSync('../jsonFileWithNotes.json')) {
    jsonObj.jsonArray = require('../jsonFileWithNotes.json');
} else{
jsonObj.jsonArray = [];
}

class Adder {
    constructor (){}

    writeIntoTheFile (value){

        return new Promise((resolve, reject) => {

            fs.writeFile('../jsonFileWithNotes.json', value, (err) => {

                if (err){
                    reject(err);
                }

                else {
                    console.log("File is updated");
                }
            });
        });
    }

    add (title, body){

        try {

            jsonObj.jsonArray.forEach((obj) =>{
                if (obj.title === title){
                    throw new Error(`Note with such title: '${title}' is already in JSON File`);
                }
            });

        } catch (err) {
            console.log(err.message);
            return;
        }

        return new Promise((resolve, reject) => {
            jsonObj.jsonArray.push({title:title, body: body});

            let parsedObj = JSON.stringify(jsonObj.jsonArray);
            resolve(parsedObj);
        }).then((parsedObj) => {
            this.writeIntoTheFile(parsedObj);
        });
    }

}

let adder = new Adder();
console.log(argv.title, argv.body);
adder.add(argv.title, argv.body);


