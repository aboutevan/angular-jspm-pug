describe('Users factory', function () {
  var Users;

  //before each test load api.users module
  beforeEach(angular.mock.module('api.users'));

  // before each test set our injected Users factory (_Users_) to our local Users variable
  
  beforEach(inject(function (_Users_) {
    Users = _Users_;
  }));

  it('should exist', function () {
    expect(Users).toBeDefined();
  })
})