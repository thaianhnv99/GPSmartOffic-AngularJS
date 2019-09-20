'use strict';

angular
    .module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataTeamleadFactory', ['$http', function ($http) {
            var dataTeamleadFactory = {
                getlistleadteam: getlistleadteam,
                getlistleadteambyidproject: getlistleadteambyidproject,
                getlistemployeebyidteamlead: getlistemployeebyidteamlead
            };

            function getlistleadteam() {
                return $http.get('http://localhost:8080/apis/teamlead');
            }
            function getlistleadteambyidproject(idproject) {
                return $http.get('http://localhost:8080/apis/teamleadbyidproject/' + idproject);
            }
            function getlistemployeebyidteamlead(idteam) {
                return $http.get('http://localhost:8080/apis/employeebyidteamlead/' + idteam);
            }
            return dataTeamleadFactory;
        }]);
    }]);
