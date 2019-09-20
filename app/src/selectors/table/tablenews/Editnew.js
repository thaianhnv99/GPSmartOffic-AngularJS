'use strict';

angular
    .module('myApp')
    .controller('EditnewController', ['$scope', '$http', 'dataNewFactory', '$location', '$stateParams', function ($scope, $http, dataNewFactory, $location, $stateParams) {
        $scope.NewInfo = {};

        this.$onInit = function () {
             $scope.showeditinfo();
        };
        $scope.showeditinfo= function(){
            $scope.ID = $stateParams.id;
            console.log($scope.ID);
            dataNewFactory.getnewinfo($scope.ID)
                .then(function (response) {
                        $scope.NewInfo = response.data;
                        console.log($scope.NewInfo);
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        };
        $scope.updateFormnew = function () {
            dataNewFactory.updateNew($scope.NewInfo, $scope.ID)
                .then(function success(response) {
                        $location.path('/tablenews');
                        // alert("edit thanh cong");
                        $scope.message = 'User data updated!';
                        $scope.errorMessage = '';

                    },
                    function error(response) {
                        $scope.errorMessage = 'Error updating user!';
                        $scope.message = '';
                    });
        };
    }]);
