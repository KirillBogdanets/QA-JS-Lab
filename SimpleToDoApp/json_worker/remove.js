let jsonArray = require('../jsonFileWithNotes');
const fs = require('fs');
const argv = require('yargs').argv;

class Remover {
	constructor(){}

	writeIntoTheFile (value){

        return new Promise((resolve, reject) => {

            fs.writeFile('../jsonFileWithNotes.json', value, (err) => {

                if (err){
                    reject(err);
                }

                else {
                    console.log("File is updated");
                }
            });
        });
    }

	remove (title){

        let arrayLength = jsonArray.length;


        jsonArray = jsonArray.filter((element) => {
           return element.title !== title;
        });

        if (arrayLength === jsonArray.length){
            console.log(`There is no note with such title: '${title}'`);
            return;
        }
        
        return new Promise((resolve, reject) => {

            let parsedObj = JSON.stringify(jsonArray);
            resolve(parsedObj);
        }).then((parsedObj) => {
        	this.writeIntoTheFile(parsedObj);

        });
    }
}

let remover = new Remover();
// a.remove("first object");
// console.log(argv._.join(" "))
// a.remove(argv._.join(" "));
remover.remove(argv.title);







