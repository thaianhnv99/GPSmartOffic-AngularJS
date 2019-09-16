'use strict';
angular
    .module('myApp')
    .controller('InsertnewController', ['$scope', '$http', 'dataNewFactory', '$location', function ($scope, $http, dataNewFactory, $location) {
        $scope.datanewinsert = {};

        this.$onInit = function () {
        };
        $scope.onreformnew = function () {
            $scope.datanewinsert= {};
        };
        $scope.onsubmitinsertnew = function () {
            console.log($scope.datanewinsert);
            dataNewFactory.addnew($scope.datanewinsert)
                .then(function success(response) {
                        $scope.new.push($scope.datanewinsert);
                        $('#exampleModalinsertnew').modal('hide');
                        // alert('them thanh cong');
                        $scope.getListNew();
                        // $scope.onreformnew();

                    },
                    function error(response) {
                        alert('error: ' + response);
                    });
        };
    }]);
