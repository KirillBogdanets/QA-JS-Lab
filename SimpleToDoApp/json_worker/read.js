const argv = require('yargs').argv;
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


class Reader {
	constructor(){

	}

    /**
     * function for output note from file by it's title
     * @param title
     */
	read (title = "default title"){

        if (jsonArray.length === 0){
            console.log(".json File hasn't created yet.");
            return;
        }

        let counter = 0;
        jsonArray.forEach((obj) =>{
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