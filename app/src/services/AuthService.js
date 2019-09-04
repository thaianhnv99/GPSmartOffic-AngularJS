'use strict';

angular.module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('AuthService', function () {
            return {
                user: null
            }
        });
    }]);
