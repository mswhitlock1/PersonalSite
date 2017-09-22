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
        title: "Becoming Butterflies: Interactive Embodiment of the Butterfly Lifecycle",
        authorlist: "Annie Kelly, Matt Whitlock, Brielle Nickoloff, Angel Lam, Danielle Szafir, Stephen Voida",
        conference: "Ubicomp: ACM International Joint Conference on Pervasive and Ubiquitous Computing, 2017",
        citation: "",
        abstract: "Museum directors are often faced with the challenge of engaging users in the museum experience while preserving the intentions of exhibit content. Designing exhibits for children can heighten the tension between these sometimes competing goals. Working with the University of Colorado Museum of Natural History, we designed and implemented Metamorphosis, a system for an engaging, educational butterfly exhibit. The exhibit employs augmented reality and full-body interaction to guide users through critical phases of a butterfly‘s metamorphosis process. In Metamorphosis, we incorporated participatory design methods in order to leverage engaging ubiquitous technologies while supporting an educational narrative aligned with the museum‘s goals."
    },
    {
        title: "Enhancing Wi-Fi Signal Strength of a Dynamic Heterogeneous System Using a Mobile Robot Provider",
        authorlist: "Esther Rolf, Matt Whitlock, Byung-Cheol Min, Eric T Matson",
        conference: "RITA (Robot Intelligence Technology and Applications), 2013",
        citation: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pjN9Sz0AAAAJ&citation_for_view=pjN9Sz0AAAAJ:u5HHmVD_uO8C",
        abstract: "Heterogeneous networks of humans, robots, and agents are becoming increasingly common. Clients of wireless networks have continuously changing requirements for providers. In this project, a system to provide a sufficient signal for clients of a network as conditions change is proposed and validated. The system is comprised of hardware features such as a mobile access point and three heterogeneous client devices, and a movement algorithm. The mobile provider’s autonomy is verified by the independence of initial position or orientation from success of the system. The system is designed for ease of reconfiguration; modularity in system design allows for advancements to be implemented simply and effectively."
    }];
    
    $scope.teachingExperiences = [{
        title: "Teaching Assistant: Senior Projects",
        dates: "August 2016 - May 2017",
        details: [
            "Managed 8 software engineering groups in their Senior Capstone projects",
            "Helped create lesson plans to teach and practice core software engineering concepts",
            "Organize the end of year Computer Science Expo, in which students from all Senior Capstone courses showcased their work",
            "FCQ Scores were good"
        ]
    },
    {
        title: "Guest Lecture: User Experience & Design",
        dates: "September 2016",
        details: [
            "Lectured Senior Projects class on topics in principles of user-centered design, focusing on crafting software for their respective sponsors",
            "Particular focus on basic prototyping at different levels of fidelity and user testing"
        ]
    }];
    
    $scope.coursework = [
    {
        title: "Fall 2017",
        courses: [
            {
                title: "Software Project Management",
                details: [
                    "Learn the concepts and common pitfalls of managing a software project",
                    "Dig deeper into a management topic of interest"
                ]
            },
            {
                title: "Mobile and Wearable Wireless Sensor Systems",
                details: [
                    "Semester-long project in building a novel sensor system in collaboration with Tam Vu's Mobile and Networked Systems Lab."
                ]
            }
        ]
    },
    {
        title: "Spring 2017",
        courses: [{
            title: "Ubiquitous Computing & Experience Design",
            details: [
                "Ubiquitous Computing fundamentals and current state of the field; sketching and prototyping techniques",
                "Long term team project collaborating with CU Museum of Natural History to prototype and deploy a museum installation",
                "Personally led discussion on Location services and their relevance in the field of Ubiquitous Computing",
                "Personally led discussion on Microsoft HoloLens development and the relevance of Augmented Reality to Ubiquitous Computing"
                ]
            },
            {
                title: "Information Visualization",
                details: [
                    "Fundamental concepts of Data Visualization and learning to user tools such as D3 and Tableau",
                    "Multiple collaborative projects, including an industry partnership with Zayo--won 2nd place for presentation of finished visualization tool"
                ]
            }
        ]
    },
    {
        title: "Fall 2016",
        courses: [{
            title: "User Centered Design",
            details: [
                "Concepts of iterative user-cented design; understanding and practicing the benefits of different levels of prototype fidelity",
                "Led project team in building prototypes of an augmented reality shopping application at increasing levels of fidelity and iterating on feedback"
            ]
            
        }]
    }];
    
    $scope.workExperience = [
    {
        company: "The Home Depot",
        logo: 'img/The-Home-Depot-logo.jpg',
        job: 'IT Intern',
        location: 'Atlanta, GA',
        stints: [
            {
                dates: 'May 2016 - August 2016',
                details: [
                    "Created a Web Frontend and Backend for a consolidated product lookup application",
                    "Synthesized with frontend developers, UX designers and product owners"
                ]
            },
            {
                dates: 'August 2015 - December 2015',
                details: [
                    "Reverse Engineering the User Interface of a Management Console application",
                    "Incorporating responsiveness using AngularJS"
                ]
            }
        ]
    },
    {
        company: "ADTRAN Inc",
        logo: 'img/adtran.png',
        job: 'Engineering Co-op',
        location: 'Huntsville, AL',
        stints: [
            {
                dates: 'May 2014 - August 2014',
                details: [
                    "Engineered a communication layer for network management",
                    "Enhanced application scalability using the communication layer"
                ]
            },
            {
                dates: 'August 2013 - December 2013',
                details: [
                    "Developed a software submission tool to manage code changes",
                    "Maintained the tool, responding to feature requests as needed"
                ]
            },
            {
                dates: 'January 2013 - May 2013',
                details: [
                    "Developed network maps for monitoring device performance",
                    "Scripted automated tests for product qualification"
                ]
            }
        ]
    }]
}]);