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

.filter('utc', function() {
    return function(date) {
        if (date) {
            if(angular.isNumber(date) || typeof date == 'string') {
                date = new Date(date);
            }
            return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
        }
    }
})

.filter('website', function() {
    var removePrefix = function(input, prefix) {
        if (input.indexOf(prefix) === 0) {
            input = input.slice(prefix.length);
        }
        return input;
    }

    return function(website) {
        website = removePrefix(website, "http://");
        website = removePrefix(website, "https://");
        website = removePrefix(website, "www.");
        return website;
    }
})