'use strict';

angular
    .module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataProjectFactory', ['$http', function ($http) {
            var dataProjectFactory = {
                getlistproject: getlistproject,
                getlistprojectbyid: getlistprojectbyid,
                addProject: addProject,
                delProject: delProject,
                updProject: updProject
            };

            function getlistproject() {
                return $http.get('http://localhost:8080/apis/project');
            }
            function getlistprojectbyid(id_project) {
                console.log(id_project);
                return $http.get('http://localhost:8080/apis/getprojectbyid/' + id_project);
            }
            function addProject(project) {
                return $http.post('http://localhost:8080/apis/addproject', project);
            }
            function delProject(id_project) {
                return $http.delete('http://localhost:8080/apis/delproject/' + id_project);
            }
            function updProject(project) {
                console.log(project);
                return $http.put('http://localhost:8080/apis/updproject', project);
            }
            return dataProjectFactory;
        }]);
    }]);
