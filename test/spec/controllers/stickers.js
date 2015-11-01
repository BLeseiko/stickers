'use strict';

describe('Controller: StickersCtrl', function () {

  // load the controller's module
  beforeEach(module('blipparApp'));

  var StickersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StickersCtrl = $controller('StickersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
