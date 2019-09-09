'use strict';

angular
    .module('myApp')
    .controller('edituserController', edituserController);
edituserController.$inject = ['$scope', '$stateParams', 'dataUserFactory'];

function edituserController($scope, $stateParams, dataUserFactory) {
    $scope.infouseredit = {};

    $scope.$onInit = function () {
        $scope.getinfouser();
    };
    $scope.getinfouser = function () {
        $scope.ID = $stateParams.id;
        console.log($stateParams.id);
        dataUserFactory.getinfouser($scope.ID)
            .then(function success(response) {
                $scope.infouseredit = response.data;
                console.log($scope.infouseredit);
            }, function error(error) {
                alert(error);
            });
    }
}
