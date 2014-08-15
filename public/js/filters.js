'use strict';

/**
 * Filters
 */
angular.module('nvFilters', [])

.filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
})