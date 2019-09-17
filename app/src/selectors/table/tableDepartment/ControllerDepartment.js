'use strict';

angular
    .module('myApp')
    .controller('DepartmentController', DepartmentController);
    DepartmentController.$inject = ['$scope', '$http', 'dataFactory', '$location', '$mdDialog','$state', '$stateParams'];

    function DepartmentController($scope, $http, dataFactory, $location, $mdDialog, $state, $stateParams) {
        $scope.Department = {};
        $scope.dataDepartments = {};
        $scope.dataEmployeeInDepartment = {};
        $scope.dataCountEmployeeInDepartment = {};
        this.$onInit = function () {
            $scope.getListDepartment();
            if($stateParams.idDepartment !== null && $stateParams.idDepartment !== undefined){
                console.log("state nhan"+$stateParams.idDepartment);
                dataFactory.GetListEmployeInDepartment($stateParams.idDepartment).then(function (response) {
                    $scope.dataDepartments = response.data;
                    console.log($scope.dataDepartments);
                });
                dataFactory.GetCountEmployeeInDepartment($stateParams.idDepartment).then(function (response) {
                    $scope.dataCountEmployeeInDepartment = response.data;
                    console.log($scope.dataCountEmployeeInDepartment);
                });
            }
            $scope.GetListEmployeeNotInDepartment();
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
            dataFactory.GetListEmployeInDepartment($stateParams.idDepartment)
                .then(function (response) {
                    $scope.dataDepartments = response.data;
                });
        };

        $scope.GetListEmployeeNotInDepartment = function () {
            dataFactory.GetListEmployeeNotInDepartment().then(function (response) {
                $scope.dataListEmployeeNotInDepartment = response.data;
            });
        };

        $scope.AddEmployeeInDepartment = function (a) {
            $scope.dataEmployeeInDepartment.id_employee = a;
            $scope.dataEmployeeInDepartment.id_department = $stateParams.idDepartment;
            console.log("Add employe in department", $scope.dataEmployeeInDepartment.id_employee, $scope.dataEmployeeInDepartment.id_department);
            dataFactory.AddEmployeeInDepartment($scope.dataEmployeeInDepartment).then(
                $scope.GetListEmployeeNotInDepartment(),
                $scope.GetListEmployeInDepartment()
            );

        };

        $scope.DeleteEmployeeInDepartment = function (a) {
            console.log("nhan vien can xoa", a);
            $scope.dataEmployeeInDepartment.id_employee = a;
            $scope.dataEmployeeInDepartment.id_department = null;
            dataFactory.AddEmployeeInDepartment($scope.dataEmployeeInDepartment).then(
                $scope.GetListEmployeInDepartment()
            );
        };


    }
