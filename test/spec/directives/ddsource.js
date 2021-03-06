'use strict';

describe('Directive: ddsource', function () {

  // load the directive's module
  beforeEach(module('blipparApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ddsource></ddsource>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ddsource directive');
  }));
});
