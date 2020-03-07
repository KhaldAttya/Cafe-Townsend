describe('cafe townsend specs', () => {

    var loginPage = require('../pages/login_page');
    var employeePage = require('../pages/employee_page');

    const USERNAME = 'Luke';
    const PASSWORD = 'Skywalker';
    const INVALID_USERNAME = 'Lanaya';
    const INVALID_PASSWORD = 'TA';
    const FIRST_NAME = 'Khaled';
    const LAST_NAME = 'Attia';
    const START_DATE = '2020-04-01';
    const EDITED_START_DATE = '2020-04-02';
    const EMAIL='khaled.attia@netherlands.earth';
    const EDITED_EMAIL='kh.attia@netherlands.earth';

  it('should not login with invalid credentials', async () => {
    loginPage.login(INVALID_USERNAME,INVALID_PASSWORD);
    loginPage.verifyInvalidCredentials();
  });

  it('should login with a valid credentials', async () => {
    loginPage.login(USERNAME,PASSWORD);
    loginPage.verifyLogin();
  });

  it('should add employee with details', async () => {
    employeePage.addEmployee(FIRST_NAME,LAST_NAME,START_DATE,EMAIL);
    employeePage.verifyEmployeeDetails(FIRST_NAME,LAST_NAME,START_DATE,EMAIL);
  });

 it('should edit employee details', async () => {
    employeePage.editEmployee(FIRST_NAME,LAST_NAME,EDITED_START_DATE,EDITED_EMAIL);
    employeePage.verifyEmployeeDetails(FIRST_NAME,LAST_NAME,EDITED_START_DATE,EDITED_EMAIL);
  });

  it('should delete employee', async () => {
    employeePage.deleteEmployee(FIRST_NAME,LAST_NAME);
    employeePage.verifyEmployeeDeleted(FIRST_NAME,LAST_NAME);
  });

  it('should logout', async () => {
    employeePage.logout();
    employeePage.varifyLogout();
  });

});