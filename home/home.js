'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function($scope) {  
    window.scrollTo(0, 0);
    
    $scope.includeDesktopTemplate = false;
    $scope.includeMobileTemplate = false; 
    var screenWidth = window.innerWidth;

    if (screenWidth < 650){
        $scope.includeMobileTemplate = true;
        document.getElementById('timeline').style.paddingLeft = "0px";
    }else{
        $scope.includeDesktopTemplate = true;
    }
}]);