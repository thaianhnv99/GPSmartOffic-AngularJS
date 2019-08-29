'use strict';

angular
    .module('myApp.CarServices', [])
    .config(['$provide', function ($provide) {
        $provide.factory('dataCarFactory', ['$http', function ($http) {
            var dataCarFactory = {
                getListCar: getListCar,
                showcarinfo: showcarinfo,
                showinsertinfocar: showinsertinfocar,
                addcar: addcar,
                deletecar: deletecar,
                updateCar: updateCar
            };

            function getListCar() {
                return $http.get('http://localhost:8080/apis/car');
            }

            function showcarinfo(ID) {
                return $http.get('http://localhost:8080/apis/car/' + ID);
            }

            function showinsertinfocar() {
                return $http.get('http://localhost:8080/apis/car/getcarinfoinsert');
            }

            function addcar(car) {
                return $http.post('http://localhost:8080/apis/car', car);
            }

            function updateCar(car, ID) {
                return $http.put('http://localhost:8080/apis/car/' + ID, car);
            }

            function deletecar(ID) {
                console.log(ID);
                return $http.delete('http://localhost:8080/apis/car/' + ID);
            }

            return dataCarFactory;
        }]);
    }]);
