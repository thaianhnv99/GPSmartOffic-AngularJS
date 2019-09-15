'use strict';

angular
    .module('myApp')
    .controller('DepartmentController', DepartmentController);
    DepartmentController.$inject = ['$scope', '$http', 'dataFactory', '$location', '$mdDialog','$state', '$stateParams'];

    function DepartmentController($scope, $http, dataFactory, $location, $mdDialog, $state, $stateParams) {
        $scope.Department = {};
        $scope.dataDepartments = {};
        console.log('state params' + $stateParams);
        this.$onInit = function () {
            $scope.getListDepartment();
            if($stateParams.id !== null && $stateParams.id !== undefined){
                dataFactory.GetListEmployeInDepartment($stateParams.id).then(function (response) {
                    $scope.dataDepartments = response.data;
                });
            }
        };
        $scope.getListDepartment = function () {
            dataFactory.Getlist()
                .then(function (response) {
                        $scope.Departments = response.data;
                        console.log($scope.Departments);
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    }
                    );
            console.log($scope.Departments);
        };
        $scope.AddDepartment = function () {
            dataFactory.AddDepartment($scope.Department).then(function () {
                $scope.getListDepartment();
            });
            console.log("add thành công");
        };
        $scope.UpdateDepartment = function () {
            dataFactory.UpdateDepartment($scope.dataDepartments).then(function () {
                $scope.getListDepartment();
            });
        };
        $scope.DeleteDepartment = function ($Departmentd) {
            dataFactory.DeleteDepartment($Departmentd).then(function () {
                $scope.getListDepartment();
            });
        };
        $scope.SearchDepartment = function (dataDepartments) {
            if(dataDepartments == null){
                $scope.getListDepartment();
            }else{
                console.log(dataDepartments);
                dataFactory.SearchDepartment(dataDepartments)
                    .then(function (response) {
                        $scope.Departments = response.data;
                    });
            }

        };
        $scope.GetlistDepartmentById = function (id) {
            console.log("object can sua:", id);
            dataFactory.GetlistDepartmentById(id)
                .then(function (response) {
                    $scope.dataDepartments = response.data;
                });
        };

        $scope.GetListEmployeInDepartment = function () {
            dataFactory.GetListEmployeInDepartment($stateParams.id)
                .then(function (response) {
                    $scope.dataDepartments = response.data;
                });
        };

    }
