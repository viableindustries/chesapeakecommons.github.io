'use strict';

angular
  .module('viableApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/terms', {
        templateUrl: 'views/terms.html',
        controller: 'TermsCtrl'
      })
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'PrivacyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // If you remove this, you break the whole application
    // $locationProvider.html5Mode(true).hashPrefix('!');
    // $locationProvider.html5Mode(true);

  }]);
