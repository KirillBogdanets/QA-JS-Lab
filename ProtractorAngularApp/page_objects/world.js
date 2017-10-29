const HomePage = require('./home_page.js');
const BarcelonaPage = require('./sport_types_pages/soccer_pages/laLiga_pages/barcelona_page.js');
const SoccerLaLigaPage = require('./sport_types_pages/soccer_pages/laLiga_pages/soccer_laliga_page.js');
const SignInPage = require('./signIn_page.js');
const LaLigaStandingPage = require('./sport_types_pages/soccer_pages/laLiga_pages/laLiga_standings_page');
const BarcelonaStatPage = require('./sport_types_pages/soccer_pages/laLiga_pages/barcelona_stat_page.js')

class World {
	constructor (){

		this.homePage = new HomePage();
		this.soccerLaLigaPage = new SoccerLaLigaPage();
		this.signInPage = new SignInPage();
		this.laLigaStandingPage = new LaLigaStandingPage();
		this.barcelonaPage = new BarcelonaPage();
		this.barcelonaStatPage = new BarcelonaStatPage();
		
	}
}

module.exports = new World();