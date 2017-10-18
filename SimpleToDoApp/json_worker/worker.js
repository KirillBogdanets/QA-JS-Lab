/**
 * Created by Kiryl_Bahdanets on 10/18/2017.
 */
const fs = require('fs');

let jsonObj = {
  jsonArray : []
};

class JsonWorker {
    constructor (){}

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

    // readJsonFile(){
    //
    //     return new Promise((resolve, reject) => {
    //
    //         fs.readFile('../jsonFileWithNotes.json', 'utf8', (err, data) => {
    //
    //             if (err){
    //                 reject(err);
    //             }
    //
    //             else {
    //                 resolve(data);
    //             }
    //         });
    //     });
    // }

    add (title, body){

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
            fs.writeFileSync('../jsonFileWithNotes.json', parsedObj);
        });
    }

    list (){
        console.log("\nHere are all notes in the File:\n");
        jsonObj.jsonArray.forEach((obj) =>{
            console.log(obj);
        });
        console.log("\n");
    }

    read (title){
        let counter = 0;
        jsonObj.jsonArray.forEach((obj) =>{
          if(obj.title === title) {
              console.log(`Here is note with given title: "${title}":\n{title: ${obj.title}, body: ${obj.body}}`);
              ++counter;
          }
        });
        if (counter === 0){
            console.log(`There is no one note with that title: ${title} in the file.`);
        }
    }

    remove (title){
        let arrayLength = jsonObj.jsonArray.length;

        jsonObj.jsonArray = jsonObj.jsonArray.filter((element) => {
           return element.title !== title;
        });

        if (arrayLength === jsonObj.jsonArray.length){
            console.log(`There is no note with such title: '${title}'`);
            return;
        }

        return new Promise((resolve, reject) => {

            let parsedObj = JSON.stringify(jsonObj.jsonArray);
            resolve(parsedObj);
        }).then((parsedObj) => {
            fs.writeFileSync('../jsonFileWithNotes.json', parsedObj);
        });
    }

}

let a = new JsonWorker();
// a.add("first object", "shake your body");
a.add("first object", "shake your body");
a.add("first object", "shake your body, move your body");
a.add("second object", "shake your body, move your body");
a.add("third object", "shake your body");
a.remove("first object");
a.remove("first object");
a.list();
// a.read("first object");


