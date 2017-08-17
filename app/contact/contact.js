'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', function($scope) {
    $scope.contacts = [
        {
            icon: 'email',
            name: 'matthew.whitlock (at) colorado.edu',
            link: 'mailto:matthew.whitlock@colorado.edu'
        },
        {
            icon: 'location_on',
            name: 'ENVD 201',
            link: 'https://www.google.com/maps/place/Environmental+Design/@40.0072827,-105.2697644,17z/'
        }
    ];
}]);