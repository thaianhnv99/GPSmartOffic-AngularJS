'use strict';

angular
    .module('myApp')
    .controller('permissonsUserController', permissonsUserController);
permissonsUserController.$inject = ['$scope', '$http', 'dataFactoryPermission', '$location', '$mdDialog', '$state', '$stateParams', '$localStorage'];

function permissonsUserController ($scope, $http, dataFactoryPermission, $location, $mdDialog, $state, $stateParams, $localStorage) {
    $scope.dataPermission = {};
    this.$onInit = function () {
        $scope.GetListPermissionAOneUser();
    };
    $scope.GetListPermissionAOneUser = function () {
        dataFactoryPermission.GetListPermissionAOneUser($localStorage.currentUser.users.user_name)
            .then(function (response) {
                    $scope.dataPermissionAOneUser = response.data;
                },
                function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
    };
    console.log("nhan session" +$localStorage.currentUser.users.user_name);

    $scope.addPermission = function () {
        $scope.dataPermission.user_name = $localStorage.currentUser.users.user_name;
        $scope.dataPermission.date = Date.now();
        dataFactoryPermission.AddPermissions($scope.dataPermission)
            .then(function () {
                $('#AddPermissons').modal('hide');
            $scope.GetListPermissionAOneUser();
        });
    };

    $scope.Getlistbyid = function (object) {
        dataFactoryPermission.Getlistbyid(object)
            .then(function (response) {
                $scope.dataPermissionById = response.data;
                console.log("data get list"+$scope.dataPermissionById);
            },
            function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };

    $scope.EditPermission = function () {
        dataFactoryPermission.UpdatePermission($scope.dataPermissionById).then(function () {
            $('#EditPermissions').modal('hide');
            $scope.GetListPermissionAOneUser();
        });
    };
}

