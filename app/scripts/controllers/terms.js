'use strict';

angular.module('viableApp')
  .controller('TermsCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

    $rootScope.page = {
      'title': 'Terms and Conditions of Use',
      'description': 'Terms and Conditions for the use of this website',
      'class': 'terms'
    };

  }]);
