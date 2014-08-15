'use strict';

/**
 * Controllers
 */
var controllers = angular.module('nvControllers', [])

.controller('MainCtrl', ['$scope', 'Phone', 
    function($scope, Phone) {

        $scope.phones = Phone.query();
        $scope.orderProp = 'age';

    }
])

.controller('DetailCtrl', ['$scope', '$routeParams', 'Phone', 
    function($scope, $routeParams, Phone) {
        
        $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function(data) {
            $scope.mainImageUrl = data.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }

    }
])