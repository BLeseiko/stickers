'use strict';

/**
 * @ngdoc function
 * @name blipparApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the blipparApp
 */
angular.module('blipparApp')
  .controller('PhotosCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.initialState = true;
    $scope.dataURI = null;

    $scope.$on('photo-loaded', function(event, data){
      $scope.initialState = false;
      $scope.dataURI = data.dataURI;
      $scope.$apply();
    });

    $scope.startOver = function(){
      $scope.initialState = true;
      $rootScope.$broadcast('reset-application');
    };
  }]);
