'use strict';

angular
    .module('myApp')
    .controller('TableleadteamController', TableleadteamController);
    TableleadteamController.$inject = ['$http', '$scope', '$mdDialog', 'dataTeamleadFactory', '$stateParams'];

function TableleadteamController($http, $scope, $mdDialog, dataTeamleadFactory, $stateParams) {
    $scope.leadteam = {};
    $scope.leadteamadd = {};
    $scope.leadteambyidproject = {};
    $scope.employeebyidteam = {};
    this.$onInit = function () {
        $scope.getlistleadteam();
        if($stateParams.id !== null && $stateParams.id !== undefined){
            dataTeamleadFactory.getlistleadteambyidproject($stateParams.id)
                .then(function (response) {
                    $scope.leadteambyidproject = response.data;
                    console.log(response.data);
                },function (error) {
                    alert("error load data");
                });
        }
        if($stateParams.idteam !==null && $stateParams.idteam !==undefined){
            dataTeamleadFactory.getlistemployeebyidteamlead($stateParams.idteam)
                .then(function (response) {
                    $scope.employeebyidteam = response.data;
                },function (error) {
                    alert("error load data");
                });
        }

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
    $scope.addteamlead = function () {
        dataTeamleadFactory.addteamlead($scope.leadteamadd)
            .then(function success(response) {
                    $scope.leadteamadd = response.data;
                    alert("Thêm Thành công ^^")
                },
                function (error) {
                    alert("Lỗi không xác định !!");
                });

    };
    $scope.deleteteamlead = function (idteam) {
        dataTeamleadFactory.deleteteamlead(idteam)
            .then(function success() {
                alert("xoa thanh cong");
            },function (error) {
                alert("error !!!");
            });
    };
}
