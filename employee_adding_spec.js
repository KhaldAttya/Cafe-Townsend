describe('adding employee', () => {
  it('should add user with details', async () => {
    await browser.get('http://cafetownsend-angular-rails.herokuapp.com/');
    expect(browser.getTitle()).toEqual('CafeTownsend-AngularJS-Rails');
  });
});