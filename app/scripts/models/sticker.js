'use strict';

/**
 * @ngdoc service
 * @name blipparApp.sticker
 * @description
 * # sticker
 * Factory in the blipparApp.
 */
angular.module('blipparApp')
  .factory('Sticker', function () {
    var Sticker = function(data){
      angular.extend(this, data);
    };

    return Sticker;
  });
