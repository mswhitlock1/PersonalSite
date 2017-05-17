'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',    
    'myApp.cv',
    'myApp.research',
    'myApp.personal',
    'myApp.version',    
    'myApp.contact',
    'ui.materialize'
])
.controller('BodyController', ["$scope", function ($scope) {
    $scope.select = {
        value: "Option1",
        choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
    };
}])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/home'});
}]);