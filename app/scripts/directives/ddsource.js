'use strict';

/**
 * @ngdoc directive
 * @name blipparApp.directive:ddsource
 * @description
 * # ddsource
 */
angular.module('blipparApp')
  .directive('ddsource', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var onDragStart = function(event){
          var dragData = {};

          this.classList.add('drag-source-started');
          event.dataTransfer.dropEffect = 'copy';
          event.dataTransfer.setData('text/uri-list', scope.datauri);
          
          dragData.width = scope.imgWidth;
          dragData.height = scope.imgHeight;
          dragData.layerX = event.offsetX;
          dragData.layerY = event.offsetY;

          event.dataTransfer.setData('text/plain', angular.toJson(dragData));
        };

        var onDragEnd = function(){
          this.classList.remove('drag-source-started');
        };

        if (!scope.datauri){
          console.error('No datauri detected in scope.');

          return;
        }

        element.on('dragstart', onDragStart);
        element.on('dragend', onDragEnd);
      }
    };
  });
