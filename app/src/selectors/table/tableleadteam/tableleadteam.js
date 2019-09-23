'use strict';

angular
    .module('myApp')
    .controller('TableleadteamController', TableleadteamController);
TableleadteamController.$inject = ['$http', '$scope', '$mdDialog', 'dataTeamleadFactory', '$stateParams'];

function TableleadteamController($http, $scope, $mdDialog, dataTeamleadFactory, $stateParams) {
    $scope.leadteam = {};
    $scope.leadteambyidteam = {};
    $scope.leadteamupdate = {};
    $scope.leadteambyidproject = {};
    $scope.employeebyidteam = {};
    $scope.employeebyidteamisnull = {};
    $scope.dataAddEmployeInTeam = {};
    $scope.dataAddTeaminProject = {};
    $scope.employeeupdate = {};
    $scope.teamleadbyidprojectisnull = {};
    this.$onInit = function () {
        $scope.getlistleadteam();
        if ($stateParams.idproject !== null && $stateParams.idproject !== undefined) {
            dataTeamleadFactory.getlistleadteambyidproject($stateParams.idproject)
                .then(function (response) {
                    $scope.leadteambyidproject = response.data;
                    console.log(response.data);
                }, function (error) {
                    alert("error load data");
                });
        }
        if ($stateParams.idteam !== null && $stateParams.idteam !== undefined) {
            dataTeamleadFactory.getlistemployeebyidteamlead($stateParams.idteam)
                .then(function (response) {
                    $scope.employeebyidteam = response.data
                    console.log(response.data);
                }, function (error) {
                    alert("error load data");
                });

        }
        $scope.getlistleadteam();
    };
    $scope.getlistleadteam = function () {
        dataTeamleadFactory.getlistleadteam()
            .then(function (response) {
                    $scope.leadteam = response.data;
                },
                function (error) {
                    alert("error load data");
                });
    };
    $scope.getlistleadteambyidproject = function () {
        dataTeamleadFactory.getlistleadteambyidproject()
            .then(function (response) {
                $scope.leadteambyidproject = response.data;
            });
    };
    $scope.getlistemployeebyidteamlead = function () {
        dataTeamleadFactory.getlistemployeebyidteamlead()
            .then(function (response) {
                $scope.employeebyidteam = response.data;
            });
    };
    $scope.getTeamleadbyidteam = function (idteam) {
        dataTeamleadFactory.getteamleadbyidteam(idteam)
            .then(function (response) {
                $scope.leadteambyidteam = response.data;
                console.log($scope.leadteambyidteam);
            }, function (error) {
                alert("error !!!");
            });
    };
    $scope.getEmployeebyidteamisnull = function () {
        dataTeamleadFactory.getlistemployeebyidteamleadisnull()
            .then(function (response) {
                $scope.employeebyidteamisnull = response.data;
                console.log($scope.employeebyidteamisnull);
            }, function (error) {
                alert("Error !!");
            });
    };
    $scope.getlistteamleadbyidprojectisnull = function() {
        dataTeamleadFactory.getlistteamleadbyidprojectisnull()
            .then(function (response) {
                $scope.teamleadbyidprojectisnull = response.data;
                console.log($scope.teamleadbyidprojectisnull);
            }, function () {
                alert("error");
            });
    };
    $scope.addTeamlead = function () {
        dataTeamleadFactory.addteamlead($scope.leadteamadd)
            .then(function success(response) {
                $scope.leadteamadd = response.data;
                $scope.leadteamadd.finderror === "OK" ? alert("Add thanh cong") : alert("ID bi trung");
                $scope.getlistleadteam();
                });
    };
    $scope.updateTeamlead = function (teamlead) {
        dataTeamleadFactory.updateteamlead(teamlead)
            .then(function success(response) {
                alert("sua thanh cong");
                $scope.getlistleadteam();
            }, function (error) {
                alert("sua that bai");
            });
    };
    $scope.deleteTeamlead = function (idteam) {
        dataTeamleadFactory.deleteteamlead(idteam)
            .then(function success() {
                alert("xoa thanh cong");
                $scope.getlistleadteam();
            }, function (error) {
                alert("error !!!");
            });
    };
    $scope.updateEmployee = function (employee) {
        $scope.dataAddEmployeInTeam = employee;
        $scope.dataAddEmployeInTeam.id_team = $stateParams.idteam;
        dataTeamleadFactory.updatemployee($scope.dataAddEmployeInTeam)
            .then($scope.getlistemployeebyidteamlead(), function success(response) {
                alert("add employee successfully ");
            }, function (error) {
                alert("error !!");
            });
    };
    $scope.deleteEmployee = function (employee) {
        $scope.dataAddEmployeInTeam = employee;
        $scope.dataAddEmployeInTeam.id_team = null;
        dataTeamleadFactory.updatemployee($scope.dataAddEmployeInTeam)
            .then($scope.getEmployeebyidteamisnull(), $scope.getlistemployeebyidteamlead());
    };
    $scope.updateteamlead = function (teamlead) {
        $scope.dataAddTeaminProject = teamlead;
        $scope.dataAddTeaminProject.id_project = $stateParams.idproject;
        console.log( $scope.dataAddTeaminProject);
        dataTeamleadFactory.updateteamlead($scope.dataAddTeaminProject.id_project)
            .then(function success(response) {
                alert("add teamlead successfully");
                $scope.getEmployeebyidteamisnull();
                $scope.getlistemployeebyidteamlead();
            },function (error) {
                alert("error");
            });
    };


}
