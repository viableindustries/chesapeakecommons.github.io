'use strict';

angular.module('viableApp')
  .controller('MainCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
    
    $rootScope.page = {
      'title': 'Viable Industries a data, mapping, and visuzlation company',
      'description': 'We create data, mapping, &amp; visualization tools for the environmental space',
      'class': 'front'
    };

  }]);
