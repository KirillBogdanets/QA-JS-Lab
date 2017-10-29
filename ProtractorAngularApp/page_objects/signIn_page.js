"use strict";


class SignInPage {

    constructor (){
        
        this.emailAdressTextField = element(by.id("capture_signIn_traditionalSignIn_emailAddress"));
        this.passworTExtField = element(by.id("capture_signIn_traditionalSignIn_password"));
        this.signInButton = element(by.id("capture_signIn_traditionalSignIn_signInButton"));
        this.signUpButton = element(by.id("SignUpButton"));

        this.signInWorker = function(usersEmail, usersPassword){
            return this.emailAdressTextField.sendKeys(usersEmail)
                .then(() => { 
                    return this.passworTExtField.sendKeys(usersPassword); 
                }).then(() => { 
                    return this.signInButton.click();
                });
        };
        
    }
}

module.exports = SignInPage;