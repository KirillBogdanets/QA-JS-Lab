/**
 * module for taking given files and creating new .json files in the root folder with data from given files inside
 */

const fs = require('fs');
let logger = require('../logger/log');
const pathFotCreationNewJsonFile = "./"; //path where .json file with data from given files inside will be created

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
                    console.info(`JSON File named: '${filename}' with data from: '${filename.substr(pathFotCreationNewJsonFile.length,(filename.length - pathFotCreationNewJsonFile.length) - 4)}csv' is updated`);
                    logger.log({
                        level: 'info',
                        message: `JSON File named: '${filename}' with data from: '${filename.substr(pathFotCreationNewJsonFile.length,(filename.length - pathFotCreationNewJsonFile.length) - 4)}csv' is updated`
                    });
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

                    return new Promise((resolve, reject) => {

                        fs.unlink(`${pathFotCreationNewJsonFile}${filename.substr(0,filename.length-3)}json`, (err, result) => {

                        if (err) {

                            console.info(`File named: '${filename}' is removed from the folder.\nJSON File with name: '${filename.substr(0,filename.length-3)}json' with data from: '${filename}' hasn't been crated yet`);
                            logger.log({
                                level: 'info',
                                message: `File named: '${filename}' is removed from the folder.\nJSON File with name: '${filename.substr(0,filename.length-3)}json' with data from: '${filename}' hasn't been crated yet`
                            });

                            return;

                        }

                            logger.log({
                                level: 'info',
                                message: `File named: '${filename}' is removed from the folder.\nJSON File ${filename.substr(0, filename.length - 3)}json was deleted from the folder`
                            });
                            console.info(`File named: '${filename}' is removed from the folder.\nJSON File ${filename.substr(0, filename.length - 3)}json was deleted from the folder`);

                        });
                    });
                }

                else {
                    resolve(data);
                }

            });

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

            return JSON.stringify(obj, null, 2);

        }).then((parsedObject) => {

            this.writeIntoTheFile(parsedObject,`${pathFotCreationNewJsonFile}${filename.substring(0, filename.length - 4)}.json`);

        }).catch(err =>{
            console.error(err);
            logger.log({
                level: 'error',
                message: `${err}`
            });
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

            try {

                fs.unlinkSync(`${pathFotCreationNewJsonFile}${filename.substr(0, filename.length - 3)}json`);

                console.info(`File named: '${filename}' is removed from the folder.\nJSON File ${filename.substr(0, filename.length - 3)}json was deleted from the folder`);
                logger.log({
                    level: 'info',
                    message: `File named: '${filename}' is removed from the folder.\nJSON File ${filename.substr(0, filename.length - 3)}json was deleted from the folder`
                });

                return;

            } catch (error){

                console.info(`File named: '${filename}' is removed from the folder.\nJSON File with name: '${filename.substr(0,filename.length-3)}json' with data from: '${filename}' hasn't been crated yet`);
                logger.log({
                    level: 'info',
                    message: `File named: '${filename}' is removed from the folder.\nJSON File with name: '${filename.substr(0,filename.length-3)}json' with data from: '${filename}' hasn't been crated yet`
                });

                return;

            }
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

        let parsedObj = JSON.stringify(obj, null, 2);

        fs.writeFileSync(`${pathFotCreationNewJsonFile}${filename.substring(0, filename.length - 4)}.json`,parsedObj);

        console.info(`JSON File named: '${filename}' with data from: '${filename.substr(pathFotCreationNewJsonFile.length,(filename.length - pathFotCreationNewJsonFile.length) - 4)}csv' is updated`);
        logger.log({
            level: 'info',
            message: `JSON File named: '${filename}' with data from: '${filename.substr(pathFotCreationNewJsonFile.length,(filename.length - pathFotCreationNewJsonFile.length) - 4)}csv' is updated`
        });

        return parsedObj;
    }
}

module.exports = new Importer();


