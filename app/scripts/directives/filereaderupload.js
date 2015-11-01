'use strict';

/**
 * @ngdoc directive
 * @name blipparApp.directive:filereaderUpload
 * @description
 * # filereaderUpload
 */
angular.module('blipparApp')
  .directive('filereaderUpload', function () {
    return {
      restrict: 'A',
      controller: function($scope){
        $scope.emitPhotoLoaded = function(data){
          $scope.$emit('photo-loaded', data);
        };
      },
      link: function postLink(scope, element) {
        element.on('change', function(event){
          var file = event.target.files[0],
            reader = new FileReader();

          if (!file.type.match('image.*')){
            return;
          }

          reader.onload = function(event){
            scope.emitPhotoLoaded({ dataURI: event.target.result, file: file});
          };

          reader.readAsDataURL(file);
        });
      }
    };
  });
