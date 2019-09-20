'use strict';

angular
    .module('myApp')
    .controller('permissonsUserController', permissonsUserController)
permissonsUserController.$inject = ['$scope', '$http', 'dataFactoryPermission', '$location', '$mdDialog', '$state', '$stateParams'];

function permissonsUserController ($scope, $http, dataFactoryPermission, $location, $mdDialog, $state, $stateParams) {
    this.$onInit = function () {
        $scope.GetListPermissionAOneUser();
    };
    $scope.GetListPermissionAOneUser = function () {
        dataFactoryPermission.GetListPermissionAOneUser("1")
            .then(function (response) {
                    $scope.dataPermissionAOneUser = response.data;
                },
                function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
    };
}

