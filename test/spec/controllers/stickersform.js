'use strict';

describe('Controller: StickersformCtrl', function () {

  // load the controller's module
  beforeEach(module('blipparApp'));

  var StickersformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StickersformCtrl = $controller('StickersformCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
