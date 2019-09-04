'use strict';

angular
    .module('myApp')
    .controller('HomenewsController', HomenewsController);
HomenewsController.$inject = ['$http', '$scope', 'AuthService', '$localStorage', 'dataUserFactory'];

function HomenewsController($http, $scope, AuthService, $localStorage, dataUserFactory) {
    $scope.userss = AuthService.user;
    $scope.listuser = [];
    console.log(AuthService.user);
    if (AuthService.user) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        console.log($http.defaults.headers.common.Authorization);
    }
    dataUserFactory.getlistuser()
        .then(function success(response) {
                $scope.listuser = response.data;
                console.log($scope.listuser);
            },
            function error(error) {
                console.log(error);
            })
}
