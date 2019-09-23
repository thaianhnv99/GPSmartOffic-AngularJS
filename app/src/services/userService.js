'use strict';

angular.module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataUserFactory', ['$http', function ($http) {
            var dataUserFactory = {
                loaduserlogin: loaduserlogin,
                getinfobyusername: getinfobyusername,
                getlistuser: getlistuser,
                saveedituser: saveedituser,
                deleteuser: deleteuser,
                getinfouser: getinfouser,
                getrolebyusername: getrolebyusername,
                deleterolebyusername: deleterolebyusername,
                updaterolebyusername: updaterolebyusername,
                getquantity: getquantity,
                registeruser: registeruser
            };

            function loaduserlogin(user) {
                console.log(user);
                return $http.post('http://localhost:8080/authenticate', user)
            }

            function getinfouser(id) {
                return $http.post('http://localhost:8080/api/users/' + id)
            }

            function getinfobyusername(user) {
                return $http.post('http://localhost:8080/api/users/usershowinfo', user)
            }

            function getlistuser() {
                return $http.get('http://localhost:8080/api/users')
            }

            function saveedituser(user) {
                return $http.post('http://localhost:8080/api/users/update', user)
            }

            function deleteuser(user) {
                return $http.post('http://localhost:8080/api/users/delete', user)
            }

            function getrolebyusername(user) {
                return $http.get('http://localhost:8080/api/role/getlistbyuser/' + user)
            }

            function deleterolebyusername(user) {
                return $http.post('http://localhost:8080/api/role/deletebyusername', user)
            }

            function updaterolebyusername(username, idrole) {
                return $http.post('http://localhost:8080/api/role/updaterolebyusername/' + username, idrole)
            }

            function getquantity() {
                return $http.get('http://localhost:8080/api/getquantity')
            }

            function registeruser(user) {
                return $http.post('http://localhost:8080/apis/register', user);
            }

            return dataUserFactory;
        }]);
    }]);
