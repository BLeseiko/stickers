'use strict';

/**
 * @ngdoc overview
 * @name blipparApp
 * @description
 * # blipparApp
 *
 * Main module of the application.
 */
angular
  .module('blipparApp', [
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
