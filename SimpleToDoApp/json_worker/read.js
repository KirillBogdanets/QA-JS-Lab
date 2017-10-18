const jsonArray = require('../jsonFileWithNotes');
const argv = require('yargs').argv;

class Reader {
	constructor(){

	}

	read (title = "Something"){

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