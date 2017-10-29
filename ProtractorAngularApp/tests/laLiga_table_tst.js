const world = require("../page_objects/world");
const EC = protractor.ExpectedConditions;
const DEFAULT_STEP_TIMEOUT = 60 * 1000;

describe("www.foxsports.com soccer La-Liga table verification", function() {
	
    const usersPassword = "qweasdzxc123";
    const usersEmail = "bogdanetskirill@gmail.com";
    const firstPlaceInLaLigaTable = "Barcelona";
    const topBarcaStriker = "Messi, Lionel";

    beforeEach(function() {

        world.homePage.openPage();
	
    });

    afterAll(function() {

        console.log(`La-Liga table is correct so it's means that ${firstPlaceInLaLigaTable} on top.\n${topBarcaStriker} is also on top too!`);
        return browser.sleep(3000);

    });

    it("Login as a created user and checking the accuracy of the La-Liga table", () => {

        browser.executeScript("arguments[0].click()", world.homePage.header.singInButton).then(() => {
            
            return world.signInPage.signInWorker(usersEmail, usersPassword); 

        }).then(() => {

            return browser.sleep(5000);

        }).then(() => {

            return browser.executeScript("arguments[0].click()", world.homePage.header.laLigaLink);

            // return browser.actions().mouseMove(world.homePage.header.SoccerLink).perform();
            // }).then(() => {
            //   return browser.wait(EC.visibilityOf(world.homePage.header.laLigaLink), DEFAULT_STEP_TIMEOUT);
            // }).then(() => {
            //   return world.homePage.header.laLigaLink.click();
        }).then(() =>{

        	return browser.wait(EC.visibilityOf(world.soccerLaLigaPage.soccerPagesHeader.standingsButton));

        }).then(() =>{

        	return world.soccerLaLigaPage.soccerPagesHeader.standingsButton.click();

        }).then(() => {

        	return world.laLigaStandingPage.laLigaTablesFirstPlace.getText(); 

        }).then((firstPlace) => {

        	expect(firstPlaceInLaLigaTable).toEqual(firstPlace);   

        	console.log(`As xpected ${firstPlaceInLaLigaTable} on top of the La-Liga table!`);

        	return world.laLigaStandingPage.allLaLigaTeamsInTheTable.count();

        }).then((numberOfTeams) => {

     	    expect(true).toBe((numberOfTeams - 1) === 20); 

     	    return browser.executeScript("arguments[0].style.backgroundColor = \"yellow\"" , world.laLigaStandingPage.laLigaTablesFirstPlace);

        }).then(() => {

     	    return browser.sleep(2000);

        }).then(() => {

     	    return world.laLigaStandingPage.laLigaTablesFirstPlace.click();

        }).then(() => {

     	    return world.barcelonaPage.barcelonaStat.click();

        }).then(() => {

     	    return world.barcelonaStatPage.topBarcaScorer.getText();

        }).then((topScorer) => {

     	    expect(topBarcaStriker).toEqual(topScorer);

     	    console.log(`As xpected top Barca striker is ${topBarcaStriker}. He is incredible!`);

     	    return browser.executeScript("arguments[0].style.backgroundColor = \"yellow\"", world.barcelonaStatPage.topBarcaScorer);

        }).then(() => {

     	    return browser.executeScript("window.scrollTo(200,100)");

        });

    });

});

