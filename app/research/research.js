'use strict';

angular.module('myApp.research', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/research', {
    templateUrl: 'research/research.html',
    controller: 'ResearchCtrl'
  });
}])

.controller('ResearchCtrl', ['$scope', function($scope) {
    $scope.currentProjects = [
        {
            img: "img/AR_Stock.png",
            img_link: "",
            link_name: "",
            description: "We are currently running a study on interactions in augmented reality. We are comparing current state of the art in interactions with digital content to other potential means of interaction.  We itend to inform designers of future hardware and applications"
        },
        {
            img: "img/CaterpillarPhase_final.png",
            img_link: "#!/gallery/metamorphosis",
            link_name: "Pictures",
            description: 'In collaboration with the University of Colorado Museum of Natural History, our team is looking to deploy an interactive system to engage students in the "Becoming Butterflies Exhibit."  With use fo the Microsoft Kinect, users with targetted age 7-10 can embody key aspects of the metamorphosis lifecycle.'
        }
    ];
    
    $scope.pastProjects = [
        {
            img: "img/StoAR/FullStore.png",
            img_link: "#!/gallery/StoAR",
            link_name: "Pictures",
            description: "I led a team working on a project that doubled as an exercise in User-Centered Design.  Our group explored the potential for use of augmented reality to blend the virtual and physical shopping experiences.  We went through the stages of interviews and prototyping to iteratively work toward a final prototype, built in virtual reality."
        },
        {
            img: "img/ZayoDashboard.png",
            img_link: "",
            link_name: "",
            description: "As a part of a class project for Information Visaulization, we partnered with Zayo (www.zayo.com) to visualize hypothetical mapdata which could inform them on where they may expand their customer base.  Our group presented to Zayo and won second place for our visualization tools and findings."
        }
    ];
}]);