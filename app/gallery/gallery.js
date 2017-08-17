'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery/:param1', {
    templateUrl: 'gallery/gallery.html',
    controller: 'GalleryCtrl'
  });
}])

// Directive to make sure the 
.directive('onLastRepeat', function() {
  return function(scope, element, attrs) {
    if (scope.$last)
      setTimeout(function() {
        scope.$emit('onRepeatLast', element, attrs);
    }, 1);
  };
})

.controller('GalleryCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.$on('$viewContentLoaded', function() {
        console.log("HEY");
        $('.materialboxed').materialbox();
    });
    $scope.galleryName = $routeParams.param1;
    $scope.images = [
        // Frisbee Images
        {
            file: "Boulder_Mountains_Idaho.jpg",
            folder: "frisbee",
            name: "Boulder Mountains",
            caption: "Some Mountains"
        },
        {
            file: "Boulder-one-line.png",
            folder: "metamorphosis",
            name: "CU Logo",
            caption: "CU Logo"
        },
        {
            file: "CaterpillarPhase_final.png",
            folder: "metamorphosis",
            name: "Caterpillar",
            caption: "A Caterpillar or something"
        },
        {
            file: "CaterpillarPhase_final.png",
            folder: "metamorphosis",
            name: "NOTHER ONE",
            caption: "A Caterpillar or something"
        },
        {
            file: "fall_mountains_banner_755.jpg",
            folder: "frisbee",
            name: "Fall Mountains",
            caption: "Some other mountains"
        }
    ];
    $scope.$on('onRepeatLast', function(scope, element, attrs) { 
        $('.materialboxed').materialbox();
    });
}]);