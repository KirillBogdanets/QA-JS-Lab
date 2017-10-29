'use strict';

class Header {
	
	constructor (){

        this.dropBoxMenu = element(by.id("wisss_title"));
        this.buttonWithLogo = element(by.css("div[class='logo-title']"));
        this.NFLLink = element(by.css("a[title='National Football League']"));
        this.MLBLink = element(by.css("a[title='Major League Baseball']"));
        this.SoccerLink = element(by.css("a[title='Soccer']"));
        this.NCAAFBLink = element(by.css("a[title='NCAA College Football']"));
        this.NBALink = element(by.css("a[title='National Basketball Association']"));
        this.UFCLink = element(by.css("a[title='Ultimate Fighting Championship']"));
        this.dropBoxWithAllOthersSports = element(by.xpath("//*[@id='js-tablet-overflow']"));
        this.watchDropBox = element(by.id("watch-nav"));
        this.showsDropBox = element(by.id("shows-nav"));
        this.moreOthersEntertainmentsDropBox = element(by.id("more-nav"));
        this.socialNetworksDropBox = element(by.id("follow-nav"));
        this.singInButton = element(by.xpath('//*[@id="SigninFontIconContainer"]'));
        this.MLBScoresLink = element(by.css("#wisss_fullPageLink"));
        this.laLigaLink = element(by.css("a[title='La Liga']"));

	}
}

module.exports = Header;