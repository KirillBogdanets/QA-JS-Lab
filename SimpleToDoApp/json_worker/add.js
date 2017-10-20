
const fs = require('fs');
const argv = require('yargs').argv;
let jsonObj = {};

const jsonFileName = '../jsonFileWithNotes.json';
const jsonVerificator = require('./jsonVerification.js');
const fileWriter = require('./fileWriter.js');

jsonObj.notesArray = jsonVerificator.jsonExistenceVerification(jsonFileName);

class Adder {
    constructor (){}

    /**
     * function for verification given title and body and if it's all okay they will be writing int the file jsonFileWithNotes.json
     * @param title
     * @param body
     * @returns {Promise.<TResult>}
     */
    add (title = "default title", body = "default body"){

        if (title === ""){
            console.log("You forget to write a title!");
            return;
        }

        try {

            jsonObj.notesArray.forEach((obj) =>{
                if (obj.title === title){
                    throw new Error(`Note with such title: '${title}' is already in JSON File`);
                }
            });

        } catch (err) {

            console.log(err.message);
            return;
        }

        return new Promise((resolve, reject) => {

            jsonObj.notesArray.push({title:title, body: body});

            let parsedObj = JSON.stringify(jsonObj.notesArray);
            resolve(parsedObj);

        }).then((parsedObj) => {

            fileWriter.writeIntoTheFile(parsedObj).then(() =>{
                console.log(`{title: ${title}, body: ${body}} has been added into the File.`)
            });

        }).catch(err =>{
            console.log(err);
        });
    }
}

let adder = new Adder();
adder.add(argv.title, argv.body);

