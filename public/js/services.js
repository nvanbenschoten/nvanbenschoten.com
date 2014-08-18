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