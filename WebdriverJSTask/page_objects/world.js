/**
 * Created by Kiryl_Bahdanets on 10/26/2017.
 */

const HomePage = require('./home_page');
const LoginPage = require('./login_page');

class World {

    constructor (){

        this.homePage = new HomePage();
        this.loginPage = new LoginPage();
    }
}

module.exports = new World();
