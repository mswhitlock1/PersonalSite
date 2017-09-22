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
        },
        {
            icon: 'img/skill_logos/python.ico',
            name: 'Python',
            category: 'Language',
            proficiency: ['1', '2', '3', '4']
        },
        {
            icon: 'img/skill_logos/WebGL_Logo.svg',
            name: 'WebGL',
            category: 'Framework',
            proficiency: ['1', '2']
        },
        {
            icon: 'img/skill_logos/Kinect.jpg',
            name: 'Kinect 1.8',
            category: 'SDK',
            proficiency: ['1', '2', '3']
        },
        {
            icon: 'img/skill_logos/visual-studio.png',
            name: 'System.Net.Sockets',
            category: 'API',
            proficiency: ['1', '2', '3']
        },
        {
            icon: 'img/skill_logos/angular.jpg',
            name: 'AngularJS',
            category: 'Framework',
            proficiency: ['1', '2', '3']
        }
    ];
    $scope.getNumber = function(numStr) {
        var num = parseInt(numStr);
        return new Array(num);   
    }
}]);
