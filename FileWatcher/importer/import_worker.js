
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
                    console.log(`File: '${filename}' is updated`);
                    resolve();
                }
            });
        });
    }

    import(path, filename){
        
        return new Promise((resolve, reject) => {

            fs.readFile(path + filename, 'utf8', (err, data) => {
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

            this.writeIntoTheFile(parsedObject,`../${filename.substring(0, filename.length - 4)}.json`);

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

module.exports = new Importer();


