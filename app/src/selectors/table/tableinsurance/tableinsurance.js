'use strict';

angular
    .module('myApp.tableinsurance', ['ngMaterial'])
    .controller('TableinsuranceController', ['$scope', '$http', 'dataInsuranceFactory', '$mdDialog', function ($scope, $http, dataInsuranceFactory, $mdDialog) {
        $scope.insurance = {};
        $scope.insuranceinfo = {};
        $scope.customFullscreen = true;

        this.$onInit = function () {
            $scope.getlistinsurance();
        };

        $scope.getlistinsurance = function () {
            dataInsuranceFactory.getlistinsurance()
                .then(function (response) {
                        $scope.insurance = response.data;
                        console.log($scope.insurance);
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        };
        $scope.showinsuranceinfo = function (i) {
            dataInsuranceFactory.getinsuranceinfo(i.idinsurance)
                .then(function (response) {
                        $scope.insuranceinfo = response.data;
                        console.log($scope.insuranceinfo);
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        };
    }])
    .directive('insuranceshowinfo', function () {
        return {
            templateUrl: 'selectors/table/tableinsurance/insuranceshowinfo.html'
        };
    })
    .directive('showinsuranceadd', function () {
        return {
            templateUrl: 'selectors/table/tableinsurance/addinsurance.html'
        };
    });
