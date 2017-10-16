const HomePage = require('./home_page.js');
const SchedulePage = require('./schedule_page.js');
const PageForBookingTickets = require('./booking_ticket_page.js');
const LoginPage = require('./login_page.js');
const ConfirmingRulesPage = require('./page_for_confirming_the_rules.js');
const MainBookingPage = require('./booking_tickets_main_page.js');
const ProposedResultsPage = require('./booking_tickets_proposed_trains_page.js');
const RoutingPageForBookingTickets = require('./booking_tickets_routing_page.js');
const UserInfoPage = require('./user_info_page.js');
const TourismPage = require('./tourism_page.js');
const BelarusianExcursianPage = require('./page_with_all_excursions_across_Belarus.js');
const NewYearExcursion = require('./page_with_new_year_excursion.js');

class World {
	constructor (){
		this.homePage = new HomePage();
		this.schedulePage = new SchedulePage();
		this.pageForBookingTickets = new PageForBookingTickets();
		this.loginPage = new LoginPage();
		this.confirmingRulesPage = new ConfirmingRulesPage();
		this.mainBookingPage = new MainBookingPage();
		this.proposedResultsPage = new ProposedResultsPage();
		this.routingPageForBookingTickets = new RoutingPageForBookingTickets();
		this.userInfoPage = new UserInfoPage();
		this.tourismPage = new TourismPage();
		this.belarusianExcursianPage = new BelarusianExcursianPage();
		this.newYearExcursion = new NewYearExcursion();
	}
}

module.exports = new World();