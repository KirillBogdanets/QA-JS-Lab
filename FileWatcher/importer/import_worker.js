/**
 * module for taking given files and creating new .json files in the root folder with data from given files inside
 */

const fs = require('fs');
const pathFotCreationNewJsonFile = "../"; //path where .json file with data from given files inside will be created

class Importer {
    constructor (){}

    /**
     * function for writing given data into given file
     * @param value
     * @param filename
     * @returns {Promise}
     */
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

    /**
     * function that take's given data from given file and create's new .json File with tat data inside. return Promise
     * with json
     * @param path
     * @param filename
     * @returns {Promise.<TResult>}
     */
    import(path, filename){
        
        return new Promise((resolve, reject) => {

            fs.readFile(path + filename, 'utf8', (err, data) => {

                if (err){
                    console.log(`No such file '${filename}' in the folder`);
                    // return;
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

            this.writeIntoTheFile(parsedObject,`${pathFotCreationNewJsonFile}${filename.substring(0, filename.length - 4)}.json`);

        });
    }

    /**
     * Synchronize function that take's given data from given file and create's new .json File with tat data inside.
     * Return json
     * @param path
     * @param filename
     */
    importSync(path, filename){

        let data;

        try {

            data = fs.readFileSync(`${path}${filename}`, "utf8");

        } catch (err){

            console.log(`No such file '${filename}' in the folder`);
            return;
        }

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
        fs.writeFileSync(`${pathFotCreationNewJsonFile}${filename.substring(0, filename.length - 4)}.json`,parsedObj);
        console.log(`File: '${filename}' is updated`);

        return parsedObj;
    }
}

module.exports = new Importer();


