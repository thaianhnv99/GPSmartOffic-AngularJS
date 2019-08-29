'use strict';

angular
    .module('myApp.editcarinfo', [])
    .controller('EditcarinfoController', ['$scope', '$http', 'dataCarFactory', '$location', '$stateParams', function ($scope, $http, dataCarFactory, $location, $stateParams) {
        $scope.CarInfo = {};

        this.$onInit = function () {
            $scope.onshoweditinfo();
        };
        $scope.onshoweditinfo = function () {
            $scope.ID = $stateParams.id;
            console.log($scope.ID);
            dataCarFactory.showcarinfo($scope.ID)
                .then(function (response) {
                        $scope.CarInfo = response.data;
                        // console.log($scope.CarInfo);
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        };
        $scope.updateForm = function () {
            dataFactory.updateCar($scope.CarInfo, $scope.ID)
                .then(function success(response) {
                        $location.path('/tablecar');
                        alert("edit thanh cong");
                        $scope.message = 'User data updated!';
                        $scope.errorMessage = '';
                    },
                    function error(response) {
                        $scope.errorMessage = 'Error updating user!';
                        $scope.message = '';
                    });
        };
    }]);
