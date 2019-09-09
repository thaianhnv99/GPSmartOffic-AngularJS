'use strict';

angular.module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataUserFactory', ['$http', function ($http) {
            var dataUserFactory = {
                loaduserlogin: loaduserlogin,
                getlistuser: getlistuser,
                deleteuser: deleteuser,
                getinfouser: getinfouser
            };

            function loaduserlogin(user) {
                console.log(user);
                return $http.post('http://localhost:8080/authenticate', user);
            }

            function getinfouser(id) {
                return $http.post('http://localhost:8080/api/users/getinfouser', id)
            }

            function getlistuser() {
                return $http.get('http://localhost:8080/api/users');
            }

            function deleteuser(user) {
                return $http.post('http://localhost:8080/api/users/delete', user);
            }

            return dataUserFactory;
        }]);
    }]);
