'use strict';

/**
 * Controllers
 */
var controllers = angular.module('nvControllers', [])

.controller('MainCtrl', ['$scope', 'config', 
    function($scope, config) {

        $scope.config = config;

        $scope.chevronClicked = function() {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 1200);
        }

        $scope.experiences = [
            {
                start: "Jan 15, 2015",
                end: "Present",
                company: "Google",
                title: "Software Engineering Intern",
                link: "https://www.google.com"
            },
            {
                start: "July 12, 2014",
                end: "Jan 15, 2015",
                company: "Tablelist",
                title: "Lead Android Engineer",
                link: "https://www.tablelist.com"
            },
            {
                start: "Feb 12, 2012",
                end: "Jan 15, 2014",
                company: "Drizly",
                title: "Android Engineer",
                link: "https://www.drizly.com"
            }
        ];

    }
])

// .controller('DetailCtrl', ['$scope', '$routeParams', 'Phone', 
//     function($scope, $routeParams, Phone) {
        
//         $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function(data) {
//             $scope.mainImageUrl = data.images[0];
//         });

//         $scope.setImage = function(imageUrl) {
//             $scope.mainImageUrl = imageUrl;
//         }

//     }
// ])