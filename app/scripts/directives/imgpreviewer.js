'use strict';

/**
 * @ngdoc directive
 * @name blipparApp.directive:imgPreviewer
 * @description
 * # imgPreviewer
 */
angular.module('blipparApp')
  .directive('imgPreviewer', function () {
    return {
      templateUrl: 'scripts/templates/imgPreviewer.html',
      restrict: 'E',
      replace: true,
      scope: {
        datauri: '=',
        width: '=?',
        height: '=?',
        isddtarget: '='
      },
      controller: function($scope, $compile){
        $scope.compile = function(element){
          return $compile(element)($scope);
        };
      },
      link: function postLink(scope, element, attrs) {
        attrs.$observe('datauri', function(){
          var img = document.createElement('img');

          var onImgLoad = function(){
            var canvas = document.createElement('canvas'),
                context = canvas.getContext('2d');

            scope.imgWidth = this.width;
            scope.imgHeight = this.height;

            if(scope.width && scope.imgWidth > scope.width){
              scope.imgHeight *= scope.width / scope.imgWidth;
              scope.imgWidth = scope.width;
            }
            if (scope.height && scope.imgHeight > scope.height){
              scope.imgWidth *= scope.height / scope.imgHeight;
              scope.imgHeight = scope.height;
            }

            canvas.width = scope.imgWidth;
            canvas.height = scope.imgHeight;

            canvas.setAttribute('draggable', scope.isddtarget ? false : true);
            canvas.setAttribute(scope.isddtarget ? 'ddtarget' : 'ddsource', '');

            canvas = scope.compile(canvas);

            context.drawImage(this, 0, 0, scope.imgWidth, scope.imgHeight);

            element.append(canvas);
          };

          img.onload = onImgLoad.bind(img);
          img.src = scope.datauri;
        });
      }
    };
  });
