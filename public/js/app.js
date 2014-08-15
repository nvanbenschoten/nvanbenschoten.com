'use strict';

/**
 * App Module
 */
var app = angular.module('nvApp', [
    'ngRoute',
    'nvControllers',
    'nvFilters',
    'nvServices',
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'partials/root.html',
                controller: 'MainCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/detail.html',
                controller: 'DetailCtrl'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);