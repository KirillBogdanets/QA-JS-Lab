/**
 * Created by Kiryl_Bahdanets on 10/19/2017.
 */

let importer = require('../importer/import_worker.js');
const fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
let fsTimeout;
const argv = require('yargs').argv;

class DirWatcher {
    constructor (){}



    watcher (path, delay) {

        eventEmitter.on("changingInTheFoulder", function (path, filename){

            importer.import(path,filename);

        });

        fs.watch(path, function(event,filename) {

            if (filename.substr(-3) === "csv") {

             if (!fsTimeout) {

                if (event === 'change' || event === 'rename') {

                    eventEmitter.emit("changingInTheFoulder", path, filename);
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



