var login_page = function () {

var usernameField =  element(by.model('user.name'));
var passwordField = element(by.model('user.password'));
var loginButton = element(by.buttonText('Login'));
var greetingsMsg = element(by.id('greetings'));
var loginErorrMsg = element(by.cssContainingText('.error-message.ng-binding','Invalid username or password!'));
var EC = protractor.ExpectedConditions;


this.login = function(username,password){

    browser.wait(EC.presenceOf(loginButton), 5000);
    usernameField.clear();
    usernameField.sendKeys(username);
    passwordField.clear();
    passwordField.sendKeys(password);
    loginButton.click();
    browser.wait(EC.presenceOf(greetingsMsg), 5000);

}

this.verifyLogin = function(){

    browser.wait(EC.presenceOf(greetingsMsg), 5000);
    expect(greetingsMsg.isDisplayed()).toBe(true);
}


this.verifyInvalidCredentials = function(){

    browser.wait(EC.presenceOf(loginErorrMsg), 5000);
    expect(loginErorrMsg.isDisplayed()).toBe(true);
    expect(loginErorrMsg.getText()).toBe('Invalid username or password!');
}
   
}
module.exports = new login_page();