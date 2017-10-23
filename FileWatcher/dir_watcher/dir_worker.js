/**
 * module for watching given folder and emitting new event if this folder file's are changed or created new .csv Files
 */

const fs = require('fs');
const events = require('events');
const pathEx = require('path');
const argv = require('yargs').argv;
const eventEmitter = new events.EventEmitter();

let importer = require('../importer/import_worker.js');
let logger = require('../logger/log');

class DirWatcher {

    constructor (){}

    /**
     * function for creating new watcher on given folder and emitting new event if this folder file's are changed or
     * user create's new .csv Files in this folder. Event is using function import() from module import_worker.js
     * @see import_worker.js
     * @param path
     * @param delay
     */
    watcher (path, delay) {

        let fsTimeout;

        console.info(`Folder's: '${path}' watcher is running...`);
        logger.log({
            level: 'info',
            message: `Folder's: '${path}' watcher is running...`
        });


        eventEmitter.on("AsyncChangingInTheFolderWatcher", (path, filename) =>{ //returns Promise

            importer.import(path,filename);

        });

        eventEmitter.on("SyncChangingInTheFolderWatcher", (path, filename) =>{ //returns json

            importer.importSync(path,filename);

        });

        fs.watch(path, (event,filename) => {

            if (pathEx.extname(filename) === ".csv") {

                if (!fsTimeout) {

                    if (event === 'change') {

                        eventEmitter.emit("AsyncChangingInTheFolderWatcher", path, filename);


                        fsTimeout = setTimeout(() => {

                            fsTimeout = null;

                        }, parseInt(delay));

                    } else if (event === 'rename'){

                        eventEmitter.emit("AsyncChangingInTheFolderWatcher", path, filename);

                    }
                }
            }
        });
    }
}

module.exports = new DirWatcher();



