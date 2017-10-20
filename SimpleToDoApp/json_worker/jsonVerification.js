/**
 * Created by Kiryl_Bahdanets on 10/20/2017.
 */
const fs = require('fs');

class JsonVerification {
    constructor (){}

    jsonExistenceVerification (json){
        if (json.substr(0,2) === ".."){
            return fs.existsSync(json) ? require(json) : [];
        } else {
            return fs.existsSync(json) ? require(`.${json}`) : [];
        }
        // console.log( require(`../../${json}`));
        // return fs.existsSync(json) ? require(json) : [];

    }

}

module.exports = new JsonVerification();