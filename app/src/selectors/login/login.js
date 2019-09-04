'use strict';

angular.module('myApp')
    .controller('LoginController', LoginController);
LoginController.$inject = ['$http', '$scope', '$mdDialog', 'dataUserFactory', '$state', '$localStorage', 'AuthService'];

function LoginController($http, $scope, $mdDialog, dataUserFactory, $state, $localStorage, AuthService) {
    $scope.customFullscreen = true;
    $scope.formuser = {
        username: "",
        password: ""
    };

    $scope.login = function () {
        console.log($scope.formuser);
        dataUserFactory.loaduserlogin($scope.formuser)
            .then(function success(response) {
                $scope.password = "";
                console.log(response.data.token);
                if (response.data.token) {
                    alert("LoginSuccessful");
                    $localStorage.currentUser = {users: response.data.user, token: response.data.token};
                    AuthService.user = response.data.user;
                    console.log(AuthService.user);
                    // $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
                    // console.log($http.defaults.headers.common.Authorization);
                    // console.log($localStorage.currentUser);
                    $state.go('homenews');
                } else {
                    alert('Authetication Failed !');
                }
            }, function error(error) {
                alert('Authetication Failed !' + error)
            })
    };
    // $scope.$onInit = function(){
    //     $scope.showDialog();
    // };
    $scope.showTabDialog = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'tabDialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }
}
