'use strict';

angular
    .module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataFactoryEmployee', ['$http', function ($http) {
            var dataFactoryEmployee = {
                Getlist: getlist,
                AddEmployee : addEmployee,
                DeleteEmployee :  deleteEmployee,
                GetlistEmployeeById : getlistEmployeeById,
                UpdateEmployee : updateEmployee,
                Uploadimages : uploadimages
            };

            function getlist() {
                return $http.get('http://localhost:8080/apis/employee');
                console.log("call servies");
            }

            function addEmployee(Employee) {
                console.log("object da add"+ Employee.id_employee + Employee.activated);
                return $http.post('http://localhost:8080/apis/Addemployee', Employee);
            }

            function deleteEmployee(Employee) {
                console.log(Employee);
                return $http.delete('http://localhost:8080/apis/DeleteEmployee/' + Employee.id_employee);
            }

            // function searchEmployee(Department) {
            //     return $http.post('http://localhost:8080/apis/search/' + Department);
            // }

            function getlistEmployeeById(id) {
                return $http.get('http://localhost:8080/apis/getEmployee/'+id);
            }

            function updateEmployee(Employee) {
                console.log("object đã sua:", Employee);
                return $http.put('http://localhost:8080/apis/updateEmployee', Employee);
            }

            function uploadimages(formData) {
                console.log(formData);
                return $http.post('http://localhost:8080/apis/upload2', formData, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                });
            }

            return dataFactoryEmployee;
        }]);
    }]);
