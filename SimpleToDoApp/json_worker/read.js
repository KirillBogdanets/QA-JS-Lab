const argv = require('yargs').argv;
const fs = require('fs');
const jsonFileName = './jsonFileWithNotes.json';

const jsonVerificator = require('./jsonVerification.js');

let notesArray = jsonVerificator.jsonExistenceVerification(jsonFileName);


class Reader {
	constructor(){

	}

    /**
     * function for output note from file by it's title
     * @param title
     */
	read (title = "default title"){

        if (notesArray.length === 0){
            console.log(".json File hasn't created yet.");
            return;
        }

        let counter = 0;
        notesArray.forEach((obj) =>{
          if(obj.title === title) {
              console.log(`Here is note with given title: "${title}":\n{title: ${obj.title}, body: ${obj.body}}`);
              ++counter;
          }
        });
        if (counter === 0){
            console.log(`There is no one note with that title: '${title}' in the file.`);
        }
    }
}

let reader = new Reader();
reader.read(argv._.join(" "));