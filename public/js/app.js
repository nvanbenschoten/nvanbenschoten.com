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

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/', {
                templateUrl: 'templates/root.html',
                controller: 'MainCtrl',
                resolve: {
                    config: ['Config', function(Config) {
                        return Config.get();
                    }],
                    experiences: ['Experience', function (Experience) {
                        return Experience.query();
                    }]
                }
            }).
            when('/phones/:phoneId', {
                templateUrl: 'templates/detail.html',
                controller: 'DetailCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);