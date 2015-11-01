'use strict';

/**
 * @ngdoc directive
 * @name blipparApp.directive:beautyUpload
 * @description
 * # beautyUpload
 */
angular.module('blipparApp')
  .directive('beautyUpload', ['DomEvents', function (DomEvents) {
    return {
      templateUrl: 'scripts/templates/beauty-upload.html',
      restrict: 'A',
      transclude: true,
      link: function postLink(scope, element) {
        var fileUploadInput = element[0].querySelector('input[type="file"]');
        
        angular.element(element[0].querySelector('button')).on('click', function(){
          if (fileUploadInput){
            DomEvents.trigger(fileUploadInput, 'click');
          }
        });
      }
    };
  }]);
