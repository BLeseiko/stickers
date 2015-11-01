'use strict';

describe('Directive: imgPreviewer', function () {

  // load the directive's module
  beforeEach(module('blipparApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<img-previewer></img-previewer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imgPreviewer directive');
  }));
});
