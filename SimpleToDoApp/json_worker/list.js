
const fs = require('fs');
const jsonFileName = './jsonFileWithNotes.json';

const jsonVerificator = require('./jsonVerification.js');

let notesArray = jsonVerificator.jsonExistenceVerification(jsonFileName);

class Lister {

	constructor(){}

    /**
     * function for output all notes into the console from the file
     */
	 list (){
         if (notesArray.length === 0){
             console.log(".json File hasn't created yet.");
             return;
         }
        console.log("\nHere are all notes in the File:\n");
        notesArray.forEach((obj) =>{
            console.log(obj);
        });
        console.log("\n");
    }
}

let lister = new Lister();
lister.list();