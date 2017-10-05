/**
 * Created by Kiryl_Bahdanets on 10/4/2017.
 */
const fs = require('fs');

function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err){
                return reject(err);
            }
            else {
                return resolve(data);
            }
        });
    });
}

readFilePromise('./text.txt')
    .then(data => {
        let finalString = '';
        let counter = 0;
        const stringArray = data.split("\n");
        for(let i = 0; i < stringArray.length; i++){
        counter += 1;
        if(counter%2 === 0){
            finalString += " " + stringArray[i];
        }
        }
        console.log(finalString);
    }).catch(err => {
    console.log(err);
});