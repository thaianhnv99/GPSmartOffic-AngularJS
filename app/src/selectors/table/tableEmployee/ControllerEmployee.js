'use strict';

angular
    .module('myApp')
    .controller('EmployeeController', EmployeeController);
    EmployeeController.$inject = ['$scope', '$http', 'dataFactoryEmployee', '$location', '$mdDialog', '$state', '$stateParams'];

    function EmployeeController ($scope, $http, dataFactoryEmployee, $location, $mdDialog, $state, $stateParams) {
        $scope.Employee = {};
        $scope.dataEmployee = {};
        $scope.selectUploadFile = "";
        this.$onInit = function () {
            $scope.getListEmployee();
            if($stateParams.id !== null && $stateParams.id !== undefined){
                dataFactoryEmployee.GetlistEmployeeById($stateParams.id).then(function (response) {
                    $scope.dataEmployee = response.data;
                });
            }
        };
        $scope.getListEmployee = function () {
            dataFactoryEmployee.Getlist()
                .then(function (response) {
                        $scope.Employees = response.data;
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        };
        $scope.AddEmployee = function (EmployeeCheck) {
            var a = 0;
            for (var i = 0; i < $scope.Employees.length; i++) {
                if (EmployeeCheck == $scope.Employees[i].id_employee) {
                    a = 1;
                }
            }
            if (a == 1) {
                alert("ko add duoc bi trung id");
            } else if (a == 0) {
                dataFactoryEmployee.AddEmployee($scope.Employee).then(function () {
                    $('#addRowModal').modal('hide');
                    $scope.getListEmployee();
                });
            }
        };
        $scope.UpdateEmployee = function () {
            console.log("object update", $scope.dataEmployee);
            dataFactoryEmployee.UpdateEmployee($scope.dataEmployee);

        };
        $scope.DeleteEmployee = function ($Employee) {
            console.log($Employee);
            dataFactoryEmployee.DeleteEmployee($Employee).then(function success() {
                $scope.getListEmployee();
            });

            console.log("xóa thành công");
        };
        $scope.searchEmployee = function (dataEmployee) {
            if(dataEmployee == null){
                $scope.getListEmployee();
            }else{
                console.log(dataEmployee);
                dataFactoryEmployee.SearchEmployee(dataEmployee)
                    .then(function (response) {
                        $scope.Employees = response.data;
                    });
            }
        };

        $scope.GetlistEmployeeById = function () {
            console.log("object can sua:", this.$stateParams.id);
            dataFactoryEmployee.GetlistEmployeeById($stateParams.id)
                .then(function (response) {
                    $scope.dataEmployee = response.data;
                });
        };

    }
