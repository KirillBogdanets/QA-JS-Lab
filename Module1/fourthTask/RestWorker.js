/**
 * Created by Kiryl_Bahdanets on 10/5/2017.
 */
const rp = require('request-promise');

if(process.argv[2].length > 2) {
    rp('http://services.groupkt.com/country/get/iso3code/' + process.argv[2].substr(0, 3).toUpperCase())
        .then((htmlString)=> {
            console.log(htmlString.slice(htmlString.indexOf("\"name"), htmlString.indexOf("}")));
        }).catch(err=> {
        console.log(err);
    });
} else if(process.argv[2].length === 2){
    rp('http://services.groupkt.com/country/get/iso2code/' + process.argv[2].toUpperCase())
        .then((htmlString)=> {
            console.log(htmlString.slice(htmlString.indexOf("\"name"), htmlString.indexOf("}")));
        }).catch(err=> {
        console.log(err);
    });
} else {
    console.log(`Sorry, but we can't find country by this code: '${process.argv[2]}'`);
}
