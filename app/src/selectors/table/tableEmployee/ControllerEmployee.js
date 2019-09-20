'use strict';

angular
    .module('myApp')
    .controller('EmployeeController', EmployeeController)
    .directive('uploadfile', uploadfile);
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
        $scope.AddEmployee = function () {
            console.log($scope.Employee);
            dataFactoryEmployee.AddEmployee($scope.Employee).then(function () {
                $scope.getListEmployee();
            });
            console.log("add thành công");
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
        $scope.SearchEmployee = function (Employee) {
            dataFactoryEmployee.SearchEmployee(Employee)
                .then(function (response) {
                    $scope.Departmentss = response.data;
                    console.log($scope.Departmentss);
                });
        };
        $scope.GetlistEmployeeById = function () {
            console.log("object can sua:", this.$stateParams.id);
            dataFactoryEmployee.GetlistEmployeeById($stateParams.id)
                .then(function (response) {
                    $scope.dataEmployee = response.data;
                });
        };

        $scope.add = function(){
            console.log($scope.selectUploadFile);
            var formData = new FormData();
            formData.append('file', $scope.selectUploadFile);
            dataFactoryEmployee.Uploadimages(formData);
        };

    }

    function uploadfile($parse) {
        var directive = {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.uploadfile);
                var modelSetter = model.assign;

                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
        return directive;
    }
