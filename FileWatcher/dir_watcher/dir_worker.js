/**
 * Created by Kiryl_Bahdanets on 10/19/2017.
 */

let a = require('../importer/import_worker.js');
const fs = require('fs');
var chokidar = require('chokidar');
let fsTimeout;

class DirWatcher {
    constructor (){}



    watcher () {

        // chokidar.watch('C:\\Users\\Kiryl_Bahdanets\\WebstormProjects\\data\\', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
        //     console.log(event, path);
        // });

        var watcher = chokidar.watch('C:\\Users\\Kiryl_Bahdanets\\WebstormProjects\\data\\', {
            ignored: /(^|[\/\\])\../,
            persistent: true
            // interval: 5000
        });

        watcher
            .on('add', path => console.log(`File ${path} has been added`))
            .on('change', path => console.log(`File ${path} has been changed`))
            .on('unlink', path => console.log(`File ${path} has been removed`));
    //     fs.watch('C:\\Users\\Kiryl_Bahdanets\\WebstormProjects\\data\\', function(event,filename) {
    //
    //         if (!fsTimeout) {
    //             // a.import('C:\\Users\\Kiryl_Bahdanets\\WebstormProjects\\data\\' + filename, filename);
    //             console.log('file.js', event, filename);
    //             fsTimeout = setTimeout(function() { fsTimeout=null }, 5000); // give 5 seconds for multiple events
    //
    //             // a.import('C:\\Users\\Kiryl_Bahdanets\\WebstormProjects\\data\\' + filename, filename);
    //         }
    //         a.import('C:\\Users\\Kiryl_Bahdanets\\WebstormProjects\\data\\' + filename, filename);
    //     }, 5000);
    }

}

let b = new DirWatcher();
b.watcher();
