'use strict';

angular.module('myApp.research', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/research', {
    templateUrl: 'research/research.html',
    controller: 'ResearchCtrl'
  });
}])

.controller('ResearchCtrl', ['$scope', function($scope) {
    window.scrollTo(0, 0);
    $scope.currentProjects = [
        {
            img: "img/home/HL-Wiimote.gif",
            img_link: "",
            link_name: "",
            description: "We conducted a study on interactions in augmented reality. We are comparing modalities current state of the art in interactions with digital content to other potential means of interaction.  We intend to inform designers of future hardware and applications."
        },
        {
            img: "img/research/Museum_AR.PNG",
            img_link: "",
            link_name: "",
            description: "Leading a team of CU Undergraduates, I am working on a platform for situatationally aware prototyping of environments and experiences in augmented reality. We are interested in the efficacy of such tools and how prototyping in situ can increase inclusion in AR application design to domain experts, rather than just developers."
        },
        {
            img: "img/research/FieldView_tease.PNG",
            img_link: "https://www.colorado.edu/cmci/2016/05/18/szafir-receives-grant-data-analysis-mobile-devices",
            link_name: "See Press Release",
            description: "We are exploring the use of virtual and augmented reality in a typical data entry and visualization workflow. With this work, we seek to enable researchers to perform analyses in the field where they collect data."
        
        },
        {
            img: "",
            img_link: "http://mnslab.org/",
            link_name: "University of Colorado MNS Lab",
            description: "Collaborating with Tam Vu's Mobile Network Systems Lab, I have worked on a novel headset that takes externally sensed data and infers tongue gestures for computer interaction."
        }
    ];
    
    $scope.pastProjects = [
        {
            img: "img/metamorphosis/butterfly.png",
            img_link: "https://dl.acm.org/citation.cfm?id=3123136",
            link_name: "Publication",
            description: 'In collaboration with the University of Colorado Museum of Natural History, our team is looking to deploy an interactive system to engage students in the "Becoming Butterflies Exhibit."  With use fo the Microsoft Kinect, users with targetted age 7-10 can embody key aspects of the metamorphosis lifecycle.'
        },
        {
            img: "img/StoAR/FullStore.png",
            img_link: "",
            link_name: "",
            description: "I led a team working on a project that doubled as an exercise in User-Centered Design.  Our group explored the potential for use of augmented reality to blend the virtual and physical shopping experiences.  We went through the stages of interviews and prototyping to iteratively work toward a final prototype, built in virtual reality."
        },
        {
            img: "img/research/ZayoDashboard.PNG",
            img_link: "",
            link_name: "",
            description: "As a part of a class project for Information Visaulization, we partnered with Zayo to visualize hypothetical mapdata which could inform them on where they may expand their customer base.  Our group presented to Zayo and won second place for our visualization tools and findings."
        }
    ];
}]);