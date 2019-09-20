'use strict';

angular.module('myApp')
    .controller('LoginController', LoginController);
LoginController.$inject = ['$http', '$scope', '$rootScope', '$mdDialog', 'dataUserFactory', '$state', '$localStorage'];

function LoginController($http, $scope, $rootScope, $mdDialog, dataUserFactory, $state, $localStorage) {
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
                console.log(response.data);
                console.log(response.data.token);
                if (response.data.token) {
                    if (response.data.user.activated === true) {
                        if (response.data.user.block === false) {
                            alert("LoginSuccessful");
                            $mdDialog.hide();
                            // DialogController.cancel();
                            $localStorage.currentUser = {users: response.data.user, token: response.data.token};
                            console.log($localStorage.currentUser);
                            $rootScope.$broadcast('LoginSuccessful');
                            $state.go('homenews');
                        } else {
                            alert('The account has been locked !');
                        }
                    } else {
                        alert('The account has not been activated !');
                    }
                } else {
                    alert('Authetication Failed !');
                }
            }, function error(error) {
                alert('Authetication Failed !' + error)
            })
    };
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

    $scope.$on('LoginSuccessful', function () {
        $rootScope.userslogin = $localStorage.currentUser;
    });
    $scope.$on('LogoutSuccessful', function () {
        delete $localStorage.currentUser;
        $rootScope.userslogin = "";
        $http.defaults.headers.common.Authorization = "";
    });
    $scope.logout = function () {
        console.log("LogoutSuccessful");
        $rootScope.$broadcast('LogoutSuccessful');
        $state.go('login');
    };
}
