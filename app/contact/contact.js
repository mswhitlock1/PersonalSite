'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', function($scope) {
    window.scrollTo(0, 0);
    $scope.contacts = [
        {
            icon: 'email',
            name: 'matthew.whitlock (at) colorado.edu',
            link: ''
        },
        {
            icon: 'location_on',
            name: 'ENVD 201',
            link: 'https://www.google.com/maps/place/Environmental+Design/@40.0072827,-105.2697644,17z/'
        }
    ];
}]);