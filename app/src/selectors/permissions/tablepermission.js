'use strict';

angular
    .module('myApp')
    .controller('TablepermissionController', TablepermissionController);
TablepermissionController.$inject = ['$scope', 'dataPermissionFactory'];

function TablepermissionController($scope, dataPermissionFactory) {
    $scope.permissions = [];

    this.$onInit = function () {
        $scope.getlistpermission();
    };

    $scope.getlistpermission = function () {
        dataPermissionFactory.getlistpermission()
            .then(function (response) {
                $scope.permissions = response.data;
                console.log($scope.permission);
            },
                function (error) {
                    alert("error load data")
                })
    }
}
