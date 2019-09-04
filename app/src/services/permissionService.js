'use strict';

angular
    .module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataPermissionFactory', ['$http', function ($http) {
            var dataPermissionFactory = {
                getlistpermission: getlistpermission
            };

            function getlistpermission() {
                return $http.get('http://localhost:8080/apis/permission');
            }

            return dataPermissionFactory;
        }]);
    }]);
