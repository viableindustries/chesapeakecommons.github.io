'use strict';

angular.module('viableApp')
  .controller('PrivacyCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {

    $rootScope.page = {
      'title': 'Privacy Policy',
      'description': 'How we use the data we collect on this site',
      'class': 'terms'
    };

  }]);
