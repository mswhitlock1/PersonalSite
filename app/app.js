'use strict';
$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
});

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',    
    'myApp.cv',
    'myApp.research',
    'myApp.personal',
    'myApp.version',    
    'myApp.contact',
    'myApp.galleries',    
    'myApp.gallery',
    'myApp.skills',
    'ui.materialize'
])
.controller('BodyController', ["$scope", function ($scope) {
}])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
}]);