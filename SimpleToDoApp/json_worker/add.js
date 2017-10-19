
const fs = require('fs');
const argv = require('yargs').argv;
let jsonObj = {};


/**
 * checking if jsonFileWithNotes.json is created
 */
if (fs.existsSync('../jsonFileWithNotes.json')) {
    jsonObj.jsonArray = require('../jsonFileWithNotes.json');
} else{
    jsonObj.jsonArray = [];
}

class Adder {
    constructor (){}

    /**
     * function for writing into the jsonFileWithNotes.json File
     * @param value
     * @returns {Promise}
     */
    writeIntoTheFile (value){

        return new Promise((resolve, reject) => {

            fs.writeFile('../jsonFileWithNotes.json', value, (err) => {

                if (err){
                    reject(err);
                }

                else {
                    console.log("File is updated");
                    resolve();
                }
            });
        });
    }

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

            this.writeIntoTheFile(parsedObj).then(() =>{
                console.log(`{title: ${title}, body: ${body}} has been added into the File.`)
            });

        }).catch(err =>{
            console.log(err);
        });
    }
}

let adder = new Adder();
adder.add(argv.title, argv.body);


