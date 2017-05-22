'use strict';

angular.module('myApp.cv', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv', {
    templateUrl: 'cv/cv.html',
    controller: 'CVCtrl'
  });
}])

.controller('CVCtrl', ['$scope', function($scope) {
    $scope.publications = [{
        title: "Enhancing Wi-Fi Signal Strength of a Dynamic Heterogeneous System Using a Mobile Robot Provider",
        authorlist: "Esther Rolf, Matt Whitlock, Byung-Cheol Min, Eric T Matson",
        conference: "RITA (Robot Intelligence Technology and Applications), 2013",
        citation: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pjN9Sz0AAAAJ&citation_for_view=pjN9Sz0AAAAJ:u5HHmVD_uO8C",
        abstract: "Heterogeneous networks of humans, robots, and agents are becoming increasingly common. Clients of wireless networks have continuously changing requirements for providers. In this project, a system to provide a sufficient signal for clients of a network as conditions change is proposed and validated. The system is comprised of hardware features such as a mobile access point and three heterogeneous client devices, and a movement algorithm. The mobile provider’s autonomy is verified by the independence of initial position or orientation from success of the system. The system is designed for ease of reconfiguration; modularity in system design allows for advancements to be implemented simply and effectively."
    }]
}]);