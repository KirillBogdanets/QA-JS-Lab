/**
 * Created by Kiryl_Bahdanets on 10/20/2017.
 */
const fs = require('fs');
const pathToWritingFile = '../jsonFileWithNotes.json';

class Writer {
    constructor (){}

    writeIntoTheFile (value){
        return new Promise((resolve, reject) => {

            fs.writeFile(pathToWritingFile, value, (err) => {

                if (err){
                    reject(err);
                }

                else {
                    console.log("File is updated");
                    resolve();
                }
            });
        });
    }
}

module.exports = new Writer();
