'use strict';

angular.module('myApp.galleries', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/galleries', {
    templateUrl: 'galleries/galleries.html',
    controller: 'GalleriesCtrl'
  });
}])

.controller('GalleriesCtrl', ['$scope', function($scope) {
    window.scrollTo(0, 0);
    $scope.galleries = [
        {
            name: 'Senior Projects',
            thumbnail: 'img/parallax1.jpg',
            url: 'senior_projects'
        },
        {
            name: 'AR Interactions',
            thumbnail: 'img/parallax1.jpg',
            url: 'ar_interactions'
        },
                {
            name: 'Metamorphosis',
            thumbnail: 'img/parallax1.jpg',
            url: 'metamorphosis'
        },
        {
            name: 'Frisbee',
            thumbnail: 'img/parallax1.jpg',
            url: 'frisbee'
        },
        {
            name: 'International',
            thumbnail: 'img/parallax1.jpg',
            url: 'international'
        }
    ];
}]);