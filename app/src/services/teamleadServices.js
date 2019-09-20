'use strict';

angular
    .module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataTeamleadFactory', ['$http', function ($http) {
            var dataTeamleadFactory = {
                getlistleadteam: getlistleadteam,
                getlistleadteambyidproject: getlistleadteambyidproject,
                getlistemployeebyidteamlead: getlistemployeebyidteamlead,
                deleteteamlead: deleteteamlead,
                addteamlead: addteamlead
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
            function deleteteamlead(idteam) {
                return $http.delete('http://localhost:8080/apis/deleteteamlead/' + idteam);
            }
            function addteamlead(teamlead) {
                return $http.post('http://localhost:8080/apis/addteamlead', teamlead);
            }
            return dataTeamleadFactory;
        }]);
    }]);
