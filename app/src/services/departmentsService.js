'use strict';

angular
    .module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataFactory', ['$http', function ($http) {
            var dataFactory = {
                Getlist: getlist,
                AddDepartment : addDepartment,
                DeleteDepartment :  deleteDepartment,
                SearchDepartment : searchDepartment,
                GetlistDepartmentById : getlistDepartmentById,
                UpdateDepartment : updateDepartment,
                GetListEmployeInDepartment : getListEmployeInDepartment,
                GetListEmployeeNotInDepartment : getListEmployeeNotInDepartment,
                AddEmployeeInDepartment : addEmployeeInDepartment,
                GetCountEmployeeInDepartment : getCountEmployeeInDepartment
            };

            function getlist() {
                return $http.get('http://localhost:8080/apis/department');
            }

            function addDepartment(Department) {
                console.log("object da add"+ Department.id_department);
                return $http.post('http://localhost:8080/apis/AddDepartment', Department);
            }

            function deleteDepartment(Department) {
                console.log(Department);
                return $http.delete('http://localhost:8080/apis/department/' + Department.id_department);
            }
            
            function searchDepartment(Department) {
                console.log(Department);
                return $http.post('http://localhost:8080/apis/search', Department);
            }

            function getlistDepartmentById(id) {
                return $http.get('http://localhost:8080/apis/getDepartment/'+id);
            }

            function updateDepartment(Department) {
                console.log("object can sua:", Department);
                return $http.put('http://localhost:8080/apis/updateDepartment', Department);
            }

            function getListEmployeInDepartment(Department) {
                return $http.post('http://localhost:8080/apis/listEmployeeInDepartment', Department);
            }

            function getListEmployeeNotInDepartment() {
                return $http.get('http://localhost:8080/apis/listEmployeeNotDepartment');
            }

            function addEmployeeInDepartment(Employee) {
                console.log("object đã sua:", Employee);
                return $http.put('http://localhost:8080/apis/updateEmployee', Employee);
            }

            function getCountEmployeeInDepartment(id) {
                console.log("id nhan:", id);
                return $http.post('http://localhost:8080/apis/listCountEmployeInDepartment', id);
            }

            return dataFactory;
        }]);
    }]);
