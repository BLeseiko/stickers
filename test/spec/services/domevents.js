'use strict';

describe('Service: domEvents', function () {

  // load the service's module
  beforeEach(module('blipparApp'));

  // instantiate service
  var domEvents;
  beforeEach(inject(function (_domEvents_) {
    domEvents = _domEvents_;
  }));

  it('should do something', function () {
    expect(!!domEvents).toBe(true);
  });

});
