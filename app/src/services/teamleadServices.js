'use strict';

angular
    .module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataTeamleadFactory', ['$http', function ($http) {
            var dataTeamleadFactory = {
                getlistleadteam: getlistleadteam,
                getteamleadbyidteam: getteamleadbyidteam,
                getlistleadteambyidproject: getlistleadteambyidproject,
                getlistemployeebyidteamlead: getlistemployeebyidteamlead,
                getlistemployeebyidteamleadisnull: getlistemployeebyidteamleadisnull,
                getlistteamleadbyidprojectisnull: getlistteamleadbyidprojectisnull,
                deleteteamlead: deleteteamlead,
                addteamlead: addteamlead,
                updateteamlead: updateteamlead,
                updatemployee: updatemployee
            };

            function getlistleadteam() {
                return $http.get('http://localhost:8080/apis/teamlead');
            }
            function getteamleadbyidteam(idteam) {
                console.log(idteam);
                return $http.get('http://localhost:8080/apis/teamleadbyidteam/' + idteam);
            }
            function getlistleadteambyidproject(idproject) {
                return $http.get('http://localhost:8080/apis/teamleadbyidproject/' + idproject);
            }
            function getlistemployeebyidteamlead(idteam) {
                return $http.get('http://localhost:8080/apis/employeebyidteamlead/' + idteam);
            }
            function getlistemployeebyidteamleadisnull() {
                return $http.get('http://localhost:8080/apis/employeebyidteamleadisnull');
            }
            function getlistteamleadbyidprojectisnull() {
                return $http.get('http://localhost:8080/apis/teamleadbyidprojectisnull');
            }
            function deleteteamlead(idteam) {
                return $http.delete('http://localhost:8080/apis/deleteteamlead/' + idteam);
            }
            function addteamlead(teamlead) {
                return $http.post('http://localhost:8080/apis/addteamlead', teamlead);
            }
            function updateteamlead(teamlead) {
                return $http.put('http://localhost:8080/apis/updateteamlead', teamlead);
            }
            function updatemployee(employee) {
                return $http.put('http://localhost:8080/apis/updateEmployee', employee);
            }
            return dataTeamleadFactory;
        }]);
    }]);
