/**
 * Created by Kiryl_Bahdanets on 10/26/2017.
 */

const HomePage = require('./home_page');
const LoginPage = require('./login_page');
const TrackerPage = require('./tracker_page');
const UsersPage = require('./users_page');

class World {

    constructor (){

        this.homePage = new HomePage();
        this.loginPage = new LoginPage();
        this.trackerPage = new TrackerPage();
        this.usersPage = new UsersPage();
    }
}

module.exports = new World();
