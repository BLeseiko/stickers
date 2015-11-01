'use strict';

/**
 * @ngdoc directive
 * @name blipparApp.directive:ddtarget
 * @description
 * # ddtarget
 */
angular.module('blipparApp')
  .directive('ddtarget', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var onDragOver = function(event){
          if (event.preventDefault) {
            event.preventDefault();
          }

          return false;
        };

        var onDrop = function(event){
          var datauri,
              context = this.getContext('2d'),
              img = document.createElement('img'),
              dropXY = [event.offsetX, event.offsetY],
              dragData;

          if (event.stopPropagation) {
            event.stopPropagation();
          }

          datauri = event.dataTransfer.getData('text/uri-list');
          try{
            dragData = angular.fromJson(event.dataTransfer.getData('text/plain'));
          } catch(e){
            console.error('Drop object data corrapted.');
          }
          console.log(dragData);

          if (datauri && datauri.length > 0){
            img.src = datauri;
            dropXY[0] = dragData.layerX > dropXY[0] ? 0 : dropXY[0] - dragData.layerX;
            dropXY[1] = dragData.layerY > dropXY[1] ? 0 : dropXY[1] - dragData.layerY;
            context.drawImage(img, dropXY[0] , dropXY[1], dragData.width, dragData.height);
          }

          return false;
        };

        element.on('dragover', onDragOver);
        element.on('drop', onDrop);
      }
    };
  });
