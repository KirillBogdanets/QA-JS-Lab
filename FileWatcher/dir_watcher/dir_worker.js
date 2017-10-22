/**
 * module for watching given folder and emitting new event if this folder file's are changed or created new .csv Files
 */

const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();

let importer = require('../importer/import_worker.js');

const argv = require('yargs').argv;

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

        console.log(`Folder's: '${path}' watcher is running...`);


        eventEmitter.on("AsyncChangingInTheFolderWatcher", (path, filename) =>{ //returns Promise

            importer.import(path,filename);

        });

        eventEmitter.on("SyncChangingInTheFolderWatcher", (path, filename) =>{ //returns json

            importer.importSync(path,filename);

        });

        fs.watch(path, (event,filename) => {

            if (filename.substr(-3) === "csv") {

                if (!fsTimeout) {

                    if (event === 'change' || event === 'rename') {

                        eventEmitter.emit("AsyncChangingInTheFolderWatcher", path, filename);

                    }

                    fsTimeout = setTimeout(() => {

                        fsTimeout = null;

                    }, parseInt(delay));
                }
            }
        });
    }
}

let dirWatcher = new DirWatcher();
dirWatcher.watcher(argv.path, argv.delay);

module.exports = new DirWatcher();



