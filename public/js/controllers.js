'use strict';

/**
 * Controllers
 */
var controllers = angular.module('nvControllers', [])

.controller('MainCtrl', ['$scope', 'config', 'experiences',
    function($scope, config, experiences) {

        $scope.config = config;
        $scope.experiences = experiences;

        $scope.chevronClicked = function() {
            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 1200);
        }

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