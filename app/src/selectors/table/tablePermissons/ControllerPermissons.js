'use strict';

angular
    .module('myApp')
    .controller('PermissionsController', PermissionsController);
PermissionsController.$inject = ['$scope', '$http', 'dataFactoryPermission', '$location', '$mdDialog', '$state', '$stateParams'];

function PermissionsController ($scope, $http, dataFactoryPermission, $location, $mdDialog, $state, $stateParams) {
    this.$onInit = function () {
        $scope.getListPermission();
    };
    $scope.dataPermissionById = {};
    $scope.getListPermission = function () {
        dataFactoryPermission.Getlist()
            .then(function (response) {
                    $scope.dataPermission = response.data;
                },
                function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
    };

    $scope.getListById = function (data) {
        console.log("nhan id:" +data)
        dataFactoryPermission.Getlistbyid(data)
            .then(function (response) {
                    $scope.dataPermissionById = response.data;
                    console.log("data get list"+$scope.dataPermissionById);
                },
                function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
    };

    $scope.updatePermission = function () {
        console.log("data update" + $scope.dataPermissionById.user_name);
        dataFactoryPermission.UpdatePermission($scope.dataPermissionById).then(function success(){
            $('#EditRowModal').modal('hide');
            $scope.getListPermission();
        })
    };
}

