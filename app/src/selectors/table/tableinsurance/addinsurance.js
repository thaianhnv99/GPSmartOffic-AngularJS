'use strict';

angular
    .module('myApp.addinsurance', [])
    .controller('addinsuranceController', ['$scope', '$http', 'dataInsuranceFactory', '$location', function ($scope, $http, dataInsuranceFactory, $location) {
        $scope.datainsuranceadd = {};
        this.$onInit = function () {
        };
        $scope.onreforminsurance = function () {
            $scope.datainsuranceadd = {};
        };

        $scope.onsubmitaddinsurance = function () {
            console.log($scope.datainsuranceadd);
            dataInsuranceFactory.addinsurance($scope.datainsuranceadd)
                .then(function success(response) {
                        $scope.insurance.push($scope.datainsuranceadd);
                        alert('them thanh cong');
                        $scope.getlistinsurance();
                        $scope.onreforminsurance();
                        $('#exampleModalCenterAddinsurance').modal('hide');
                    },
                    function error(response) {
                        alert('error: ' + response);
                    });
        };
    }]);
