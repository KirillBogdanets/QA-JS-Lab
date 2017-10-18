const jsonArray = require('../jsonFileWithNotes');
const argv = require('yargs').argv;

class Lister {
	constructor(){}

	 list (){
        console.log("\nHere are all notes in the File:\n");
        jsonArray.forEach((obj) =>{
            console.log(obj);
        });
        console.log("\n");
    }
}

let lister = new Lister();
lister.list();