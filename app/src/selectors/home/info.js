'use strict';

angular
    .module('myApp')
    .controller('showinfo', ['$scope', '$http', 'dataNewFactory', '$location', '$stateParams', function ($scope, $http, dataNewFactory, $location, $stateParams) {
        $scope.NewInfo1 = {};

        this.$onInit = function () {
            $scope.showinfo();
        };
        $scope.showinfo = function () {
            $scope.ID = $stateParams.id;
            console.log($scope.ID);
            dataNewFactory.getnewinfo($scope.ID)
                .then(function (response) {
                        $scope.NewInfo1 = response.data;
                        console.log($scope.NewInfo1);
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        };
    }]);
