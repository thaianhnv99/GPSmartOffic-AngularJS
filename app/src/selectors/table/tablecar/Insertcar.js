'use strict';

angular
    .module('myApp')
    .controller('InsertcarController', ['$scope', '$http', 'dataCarFactory', '$location', function ($scope, $http, dataCarFactory, $location) {
        $scope.carinsert = {};
        $scope.carshowinfo = {};

        this.$onInit = function () {
            // $scope.onreform();
            // $scope.showinsertinfocar();
        };

        $scope.showinsertinfocar = function () {
            dataCarFactory.showinsertinfocar()
                .then(function (response) {
                        $scope.carinsert = response.data;
                        // console.log($scope.carinsert);
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        };
        $scope.onreform = function () {
            // $scope.carinsert = {};
            $scope.showinsertinfocar();
            alert("đã reset form");
        };
        $scope.submitForm = function () {
            console.log($scope.carinsert);
            dataCarFactory.addcar($scope.carinsert)
                .then(function success(response) {
                        $scope.car.push($scope.carinsert);
                        alert("Add Thành công");
                        // console.log($scope.car);
                        $scope.onreform();
                        $('#exampleModalCenterinsert').modal('hide');
                        $scope.message = 'User added!';
                        $scope.errorMessage = '';
                    },
                    function error(response) {
                        $scope.errorMessage = 'Error adding user!';
                        $scope.message = '';
                    });
        };
    }]);
