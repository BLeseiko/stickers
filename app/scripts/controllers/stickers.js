'use strict';

/**
 * @ngdoc function
 * @name blipparApp.controller:StickersCtrl
 * @description
 * # StickersCtrl
 * Controller of the blipparApp
 */
angular.module('blipparApp')
  .controller('StickersCtrl', ['$scope', '$uibModal', '$rootScope', function ($scope, $uibModal, $rootScope) {
    $scope.stickers = [];

    $scope.showAddModal = function(){
      $uibModal.open({
        templateUrl: 'scripts/templates/add-sticker-modal.html',
        backdrop: 'static',
        controller: 'StickersformCtrl'
      }).result.then(function(formdata){
        $scope.stickers.push(formdata);
      });
    };

    $scope.removeSticker = function(index){
      $scope.stickers.splice(index, 1);
    };

    $rootScope.$on('reset-application', function(){
      $scope.stickers = [];
    });
  }]);
