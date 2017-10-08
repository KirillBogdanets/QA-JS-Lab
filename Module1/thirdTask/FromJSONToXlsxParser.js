/**
 * Created by Kiryl_Bahdanets on 10/4/2017.
 */

const fs = require('fs');
const Excel = require('exceljs');
const xlsx = require('XLSX');
const workbook1 = new Excel.Workbook();

function jsonReader(obj,number,sheet1,secondNumber) {
    let excelLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let counter = number;
    let oneMoreCounter = secondNumber;

    for (let key in obj){

        if (Array.isArray(obj[key])){

            (sheet1.getCell(excelLetters[counter] + (oneMoreCounter+1))).value = key;

            for (let i = 0; i < obj[key].length; i++) {

                if (typeof obj[key][i] === "object" || Array.isArray(obj[key][i])) {
                 
                 (sheet1.getCell(excelLetters[counter] + (oneMoreCounter+1))).value = key;
                 oneMoreCounter = jsonReader(obj[key][i],counter+1,sheet1,oneMoreCounter);
                 oneMoreCounter++;

             } else{
              (sheet1.getCell(excelLetters[counter+1] + (oneMoreCounter+1))).value = obj[key][i];
              oneMoreCounter++;
          }
      } 

  } else if (typeof obj[key] === "object" && obj[key]!== null) {

    (sheet1.getCell(excelLetters[counter] + (oneMoreCounter+1))).value = key;
    oneMoreCounter = jsonReader(obj[key],counter+1,sheet1,oneMoreCounter);
    oneMoreCounter++;

  } else if (obj[key]!== null) {

            console.log(key + " " + ((excelLetters[counter] + (oneMoreCounter+1))),obj[key]);
            (sheet1.getCell(excelLetters[counter] + (oneMoreCounter+1))).value = key;
            (sheet1.getCell(excelLetters[counter+1] + (oneMoreCounter+1))).value = obj[key];
            oneMoreCounter++;
        }
    }
    return oneMoreCounter;
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

folderReader(process.argv[2])
    .then((items) => {
        
        let counter = 0;

        for (let i = 0; i < items.length; i++) {

            if (items[i].endsWith(".json")) {
                counter += 1;
                let sheet1 = workbook1.addWorksheet('Sheet'+i);
                jsonReader(require(process.argv[2] + items[i]),0,sheet1,0);

            }
        }

        if(counter === 0){
            console.log(`No one JSON File in the folder: was founded`);
            return reject(err);
        }
        return workbook1;

    }).then(workbook1 => {
        workbook1.xlsx.writeFile(process.argv[3] + "JsonToXlsxParse.xlsx")
    }).then(() => {
        console.log("xlsx file is written.");
    }).catch(err =>{
    console.log(err);
    });
