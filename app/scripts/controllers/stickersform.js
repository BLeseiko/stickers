'use strict';

/**
 * @ngdoc function
 * @name blipparApp.controller:StickersformCtrl
 * @description
 * # StickersformCtrl
 * Controller of the blipparApp
 */
angular.module('blipparApp')
  .controller('StickersformCtrl', ['$scope', '$uibModalInstance', 'Sticker', function ($scope, $uibModalInstance, Sticker) {
    $scope.newSticker = new Sticker();
    $scope.fileSelected = false;

    $scope.$on('photo-loaded', function(event, data){
      $scope.newSticker.dataURI = data.dataURI;
      $scope.fileSelected = true;

      $scope.$apply();
    });

    $scope.close = function(){
      $uibModalInstance.dismiss('cancel');
    };

    $scope.add = function(){
      $uibModalInstance.close($scope.newSticker);
    };
  }]);
