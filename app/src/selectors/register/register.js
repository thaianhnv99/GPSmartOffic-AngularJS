'use strict';

angular.module('myApp')
    .controller('RegisterController', RegisterController);
RegisterController.$inject = ['$http', '$scope', '$mdDialog', 'dataUserFactory'];

function RegisterController($http, $scope, $mdDialog, dataUserFactory) {
    $scope.formregister = {};
    $scope.registerUser = function () {
        dataUserFactory.registeruser($scope.formregister)
            .then(function success(response) {
                $scope.formregister = response.data;
                console.log($scope.formregister.finderror);
                $scope.formregister.finderror === "OK" ? alert("Đăng ký thành công! vui lòng check email") : alert("đăng ký thất bại .Tên đăng nhập hoặc email bị trùng ");
            });
    };
}


