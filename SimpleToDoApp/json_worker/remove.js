const fs = require('fs');
const argv = require('yargs').argv;
const fileWriter = require('./fileWriter.js');

const jsonFileName = '../jsonFileWithNotes.json';

const jsonVerificator = require('./jsonVerification.js');

let notesArray = jsonVerificator.jsonExistenceVerification(jsonFileName);


class Remover {
	constructor(){}

    /**
     * function for removing note from file by it's title
     * @param title
     * @returns {Promise.<TResult>}
     */
	remove (title){

        if (notesArray.length === 0){
            console.log(".json File hasn't created yet.");
            return;
        }

        let arrayLength = notesArray.length;


        notesArray = notesArray.filter((element) => {
           return element.title !== title;
        });

        if (arrayLength === notesArray.length){
            console.log(`There is no note's with such title: '${title}'`);
            return;
        }
        
        return new Promise((resolve, reject) => {

            let parsedObj = JSON.stringify(notesArray);
            resolve(parsedObj);

        }).then((parsedObj) => {

            fileWriter.writeIntoTheFile(parsedObj);
            console.log(`Note with title: '${title}' is deleted.`)

        }).catch(err =>{

            console.log(err);

        });
    }
}

let remover = new Remover();
remover.remove(argv.title);






