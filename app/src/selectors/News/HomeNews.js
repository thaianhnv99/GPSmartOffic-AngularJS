'use strict';

angular
    .module('myApp')
    .controller('HomenewsController', HomenewsController);
HomenewsController.$inject = ['$http', '$scope', '$localStorage', 'dataUserFactory'];

function HomenewsController($http, $scope, $localStorage, dataUserFactory) {
    if ($localStorage.currentUser) {
        console.log($localStorage.currentUser);
        $scope.userss = $localStorage.currentUser.users;
        $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    }
    $scope.listuser = [];
    dataUserFactory.getlistuser()
        .then(function success(response) {
                $scope.listuser = response.data;
                console.log($scope.listuser);
            },
            function error(error) {
                console.log(error);
            })
}
