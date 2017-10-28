'use strict';

class LoginPage {
	constructor () {
		this.loginField = element(by.css("input[id='login']"));
		this.passwordField = element(by.id("password"));
		this.confirmButton = element(by.className("commandExButton"));

		this.userLoginWorker = function(login, password){
			return this.loginField.sendKeys(login)
        	.then(() => { return this.passwordField.sendKeys(password); 
        	});
		};
	}
}
module.exports = LoginPage;