/**
 * Created by Kiryl_Bahdanets on 10/23/2017.
 */

const argv = require('yargs').argv;
const dirWatcher = require('./dir_watcher/dir_worker');

(function runner(path,delay){
    dirWatcher.watcher(path,delay);
})(argv.path, argv.delay);