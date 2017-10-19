/**
 * Created by Kiryl_Bahdanets on 10/19/2017.
 */

const fs = require('fs');

class Importer {
    constructor (){}

    writeIntoTheFile (value,filename){

        return new Promise((resolve, reject) => {

            fs.writeFile(filename, value, (err) => {

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

    import(path, filename){

        console.log(path, filename);
        return new Promise((resolve, reject) => {

            fs.readFile(path, 'utf8', (err, data) => {
                if (err){
                    reject(err);
                }
                else {
                    resolve(data);
                }
            })
        }).then((data) => {

            let obj = {};
            let counter = 0;
            let productsArray = data.split("\n");

            productsArray.forEach((product) => {

                let objWithProductToJson = [];
                let typeArr = product.split(",");

                typeArr.forEach((element) => {

                    objWithProductToJson.push(`${element.replace('"',"")}`);
                });

                obj[`${counter} Product`] = objWithProductToJson;
                counter++;
            });

            return JSON.stringify(obj);

        }).then((parsedObject) => {

            this.writeIntoTheFile(parsedObject,"../MOCK_DATA(1).json");

        });
    }

    importSync(path, filename){

        let data = fs.readFileSync(path,"utf8");
        let obj = {};
        let counter = 0;
        let productsArray = data.split("\n");

        productsArray.forEach((product) => {

            let objWithProductToJson = [];
            let typeArr = product.split(",");

            typeArr.forEach((element) => {

                objWithProductToJson.push(`${element.replace('"',"")}`);
            });

            obj[`${counter} Product`] = objWithProductToJson;
            counter++;
        });

        let parsedObj = JSON.stringify(obj);
        fs.writeFileSync('../qweqwe.json',parsedObj);
        console.log("File is updated");

        return parsedObj;
    }
}
let a = new Importer();
// a.import('C:\\Users\\Kiryl_Bahdanets\\WebstormProjects\\data\\MOCK_DATA(1).csv');

module.exports = new Importer();