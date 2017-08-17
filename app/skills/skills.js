'use strict';

angular.module('myApp.skills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/skills', {
    templateUrl: 'skills/skills.html',
    controller: 'SkillsCtrl'
  });
}])

.controller('SkillsCtrl', ['$scope', function($scope) {
    $scope.skills = [
        {
            icon: 'img/skill_logos/unity.jpg',
            name: 'Unity',
            category: 'Tool',
            proficiency: ['1', '2', '3', '4']
        },
        {
            icon: 'img/skill_logos/c-sharp-icon.png',
            name: 'C#',
            category: 'Language',
            proficiency: ['1', '2', '3', '4']
        },
        {
            icon: 'img/skill_logos/latex.jpg',
            name: 'Latex',
            category: 'Language',
            proficiency: ['1', '2', '3']
        },
        {
            icon: 'img/skill_logos/hololens.png',
            name: 'HoloLens',
            category: 'Hardware',
            proficiency: ['1', '2', '3', '4', '5']
        }
    ];
    $scope.getNumber = function(numStr) {
        var num = parseInt(numStr);
        return new Array(num);   
    }
}]);
