
const fs = require('fs');
let jsonArray;

/**
 * checking if jsonFileWithNotes.json is created
 */
if (fs.existsSync('./jsonFileWithNotes.json')) {
   jsonArray = require('../jsonFileWithNotes.json');
} else{
   jsonArray = [];

}

class Lister {
	constructor(){}

    /**
     * function for output all notes into the console from the file
     */
	 list (){
         if (jsonArray.length === 0){
             console.log(".json File hasn't created yet.");
             return;
         }
        console.log("\nHere are all notes in the File:\n");
        jsonArray.forEach((obj) =>{
            console.log(obj);
        });
        console.log("\n");
    }
}

let lister = new Lister();
lister.list();