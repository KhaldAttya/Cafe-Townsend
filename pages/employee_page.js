var employee_page = function () {

var createEmployeeButton = element(by.id('bAdd'));
var editEmployeeButton = element(by.id('bEdit'));
var addEmployeeButton = element(by.buttonText('Add'));
var firstNameField = element(by.model('selectedEmployee.firstName'));
var lastNameField =  element(by.model('selectedEmployee.lastName'));
var startDataField = element(by.model('selectedEmployee.startDate'));
var emailField = element(by.model('selectedEmployee.email'));
var updateButton = element(by.buttonText('Update'));
var deleteEmployeeButton = element(by.id('bDelete'));
var backButton = element(by.className('subButton bBack'));
var logout = element(by.cssContainingText('.main-button','Logout'));
var usernameField =  element(by.model('user.name'));

var EC = protractor.ExpectedConditions;

this.addEmployee = function(firstName,lastName,startDate,email)
    {
    createEmployeeButton.click();
    browser.wait(EC.presenceOf(addEmployeeButton), 5000);
    firstNameField.sendKeys(firstName);
    lastNameField.sendKeys(lastName);
    startDataField.sendKeys(startDate);
    emailField.sendKeys(email);
    addEmployeeButton.click();
    }
   

this.getEmployeeFromList = function(firstName,lastName){
   return element(by.cssContainingText('li.ng-scope', firstName+' '+lastName));
}  

this.verifyEmployeeDetails = function(firstName,lastName,startDate,email){
    var userAdded = this.getEmployeeFromList(firstName,lastName);
    expect(userAdded.isDisplayed()).toBe(true);
  
    browser.actions().
    doubleClick(userAdded).
    perform();

    browser.wait(EC.presenceOf(updateButton), 5000);

    expect(firstNameField.getAttribute('value')).toEqual(firstName);
    expect(lastNameField.getAttribute('value')).toEqual(lastName);
    expect(startDataField.getAttribute('value')).toEqual(startDate);
    expect(emailField.getAttribute('value')).toEqual(email);
    backButton.click();

}

this.editEmployee = function(firstName,lastName,startDate,email)
    {
    this.getEmployeeFromList(firstName,lastName).click();
    editEmployeeButton.click();
    browser.wait(EC.presenceOf(addEmployeeButton), 5000);
    firstNameField.clear();
    firstNameField.sendKeys(firstName);
    lastNameField.clear();
    lastNameField.sendKeys(lastName);
    startDataField.clear();
    startDataField.sendKeys(startDate);
    emailField.clear();
    emailField.sendKeys(email);
    updateButton.click();
    browser.wait(EC.presenceOf(createEmployeeButton), 5000);
    }

this.deleteEmployee = function(firstName,lastName){
    this.getEmployeeFromList(firstName,lastName).click();
    deleteEmployeeButton.click();
    browser.switchTo().alert().accept();
}

this.verifyEmployeeDeleted = function(firstName,lastName){
    expect(browser.isElementPresent(this.getEmployeeFromList(firstName,lastName))).toBe(false);
}

this.logout = function(){
    logout.click();
}
this.varifyLogout = function(){
    expect(usernameField.isDisplayed()).toBe(true);
}

}
module.exports = new employee_page();