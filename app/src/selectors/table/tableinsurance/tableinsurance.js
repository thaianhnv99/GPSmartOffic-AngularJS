'use strict';

angular
    .module('myApp')
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
        $scope.showConfirm = function (ev, i) {
            $scope.index = i;
            console.log($scope.index);
            var confirm = $mdDialog.confirm()
                .title('Bạn có mún delete insurance!!')
                .textContent('delete insurance in table.')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Delete!')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function () {
                console.log($scope.index);
                var idinsurance = $scope.insurance[i].idinsurance;
                console.log(idinsurance);
                dataInsuranceFactory.deleteinsurance(idinsurance)
                    .then(function success(response) {
                        $scope.insurance.splice(i, 1);
                        alert('Da xoa thanh cong');
                    });
            }, function () {
                $scope.status = 'hihi^^.';
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
