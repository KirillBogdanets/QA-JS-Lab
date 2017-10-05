/**
 * Created by Kiryl_Bahdanets on 10/4/2017.
 */
const XLSX = require('XLSX');
const fs = require('fs');

const firstState = process.argv[2];
const secondState = process.argv[3];

function jsonReader(obj) {
    for(let key in obj){
        if(Array.isArray(obj[key])){
            obj[key] = obj[key].join();
        } if(typeof obj[key] === "object" && obj[key]!== null) {
            let myString = "";
            Object.defineProperty(obj[key],"toString",{
                value: function(){
                    for(let oneMoreKey in obj[key]) {
                            myString += `${oneMoreKey}` + " : " + `${obj[key][oneMoreKey]}\n`;
                    }
                    return myString;
                },
                enumerable:false});
            obj[key] = obj[key].toString();
        }
    }
    return obj;
}

function folderReader(path) {
    return new Promise((resolve, reject)=> {
        fs.readdir(path, function (err, items) {
            if (err){
                return reject(err);
            }
            else {
            return resolve(items);
            }
        });
    });
}

folderReader(firstState)
    .then((items) => {
        let wb = XLSX.utils.book_new();
        let ws = "";
        let counter = 0;
        for (let i = 0; i < items.length; i++) {
            if (items[i].endsWith(".json")) {
                counter += 1;
                ws = XLSX.utils.json_to_sheet([jsonReader(require(firstState + items[i]))]);

                XLSX.utils.book_append_sheet(wb, ws, i+"Sheet");
            }
        }
        if(counter === 0){
            console.log(`No one JSON File in the folder: '${firstState}' was founded`);
            return;
        }
        XLSX.writeFile(wb,secondState + "ExcelFileWithParsedJSON.xlsx");
    }).catch(err =>{
    console.log(err);
});

