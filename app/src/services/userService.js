'use strict';

angular.module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataUserFactory', ['$http', function ($http) {
            var dataUserFactory = {
                loaduserlogin: loaduserlogin,
                getlistuser: getlistuser,
                registeruser: registeruser,
            };

            function loaduserlogin(user) {
                console.log(user);
                return $http.post('http://localhost:8080/authenticate', user);
            }
            function getlistuser() {
                return $http.get('http://localhost:8080/api/users');
            }
            function registeruser(user) {
                return $http.post('http://localhost:8080/apis/register', user);
            }
            return dataUserFactory;
        }]);
    }]);


