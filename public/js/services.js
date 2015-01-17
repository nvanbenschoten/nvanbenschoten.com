'use strict';

/**
 * Sevices
 */
angular.module('nvServices', ['ngResource'])

.factory('Config', ['$resource',
    function($resource) {
        return $resource('http://api.nvanbenschoten.com/config', {}, {

        });
    }
])

.factory('About', ['$resource',
    function($resource) {
        return $resource('http://api.nvanbenschoten.com/about', {}, {

        });
    }
])

.factory('Experience', ['$resource',
    function($resource) {
        return $resource('http://api.nvanbenschoten.com/experience', {}, {

        });
    }
])