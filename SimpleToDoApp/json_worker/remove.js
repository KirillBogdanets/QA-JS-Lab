const fs = require('fs');
const argv = require('yargs').argv;
let jsonArray;

/**
 * checking if jsonFileWithNotes.json is created
 */
if (fs.existsSync('../jsonFileWithNotes.json')) {
    jsonArray = require('../jsonFileWithNotes.json');
} else{
    jsonArray = [];
}

class Remover {
	constructor(){}

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
            });
        });
    }

    /**
     * function for removing note from file by it's title
     * @param title
     * @returns {Promise.<TResult>}
     */
	remove (title){

        if (jsonArray.length === 0){
            console.log(".json File hasn't created yet.");
            return;
        }

        let arrayLength = jsonArray.length;


        jsonArray = jsonArray.filter((element) => {
           return element.title !== title;
        });

        if (arrayLength === jsonArray.length){
            console.log(`There is no note's with such title: '${title}'`);
            return;
        }
        
        return new Promise((resolve, reject) => {

            let parsedObj = JSON.stringify(jsonArray);
            resolve(parsedObj);
        }).then((parsedObj) => {
        	this.writeIntoTheFile(parsedObj);
            console.log(`Note with title: '${title}' is deleted.`)
        }).catch(err =>{
            console.log(err);
        });
    }
}

let remover = new Remover();
remover.remove(argv.title);







