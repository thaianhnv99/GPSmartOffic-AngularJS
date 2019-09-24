'use strict';

angular
    .module('myApp')
    .controller('edituserController', edituserController);
edituserController.$inject = ['$http', '$scope', '$stateParams', 'dataUserFactory', '$timeout', 'UploadFactory', '$state', '$localStorage', '$rootScope'];

function edituserController($http, $scope, $stateParams, dataUserFactory, $timeout, UploadFactory, $state, $localStorage, $rootScope) {
    $scope.infouseredit = {};
    $scope.displayimages = "";
    $scope.listrole = [
        {id_role: 1, name_role: 'ADMIN'},
        {id_role: 2, name_role: 'MANAGER'},
        {id_role: 3, name_role: 'LEADER'},
        {id_role: 4, name_role: 'MEMBER'}
    ];
    $scope.roless = [];
    this.$onInit = function () {
        $scope.getinfousers();
        if ($localStorage.currentUser) {
            $scope.checkrole = $localStorage.currentUser.users;
        }
    };
    $scope.getinfousers = function () {
        $scope.ID = $stateParams.id;
        console.log($stateParams.id);
        $scope.infouseredit.user_name = $scope.ID;
        $scope.getrolebyusernames($scope.ID);
        dataUserFactory.getinfobyusername($scope.infouseredit)
            .then(function success(response) {
                $scope.infouseredit = response.data;
                $scope.displayimages = "http://localhost:8080/files/" + response.data.images;
                console.log($scope.displayimages);
                console.log($scope.infouseredit);
            }, function error(error) {
                alert(error);
            });
    };
    $scope.getrolebyusernames = function (user_name) {
        console.log(user_name);
        dataUserFactory.getrolebyusername(user_name)
            .then(function success(response) {
                console.log(response.data);
                angular.forEach(response.data, function (value, key) {
                    $scope.roless.push(value.id_role);
                });
            }, function error(error) {
                alert("Not OK");
            })
    };
    $scope.deleterolebyusername = function (user) {
        console.log(user);
        dataUserFactory.deleterolebyusername(user)
            .then(function success(response) {
                $scope.updaterolebyusername();
            }, function error(error) {
            })
    };
    $scope.updaterolebyusername = function () {
        for (var i = 0; i < $scope.roless.length; i++) {
            console.log($scope.roless[i]);
            dataUserFactory.updaterolebyusername($scope.infouseredit.user_name, $scope.roless[i])
                .then(function success(response) {
                }, function error(error) {
                });
        }
        $scope.getinfousers();
        alert("update success");
        $state.go('user');
    };
    $scope.fileReaderSupported = window.FileReader != null;
    $scope.photoChanged = function (files) {
        if (files != null) {
            var file = files[0];
            $scope.infouseredit.images = file.name;
            console.log($scope.infouseredit.images);
            if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                $timeout(function () {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = function (e) {
                        $timeout(function () {
                            $scope.displayimages = e.target.result;
                        });
                    }
                });
            }
        }
    };
    $scope.selectUploadFile = "";
    $scope.saveedituser = function () {
        var formData = new FormData();
        formData.append('file', $scope.selectUploadFile);
        UploadFactory.saveDoc(formData);
        dataUserFactory.saveedituser($scope.infouseredit)
            .then(function success(response) {
                $timeout($scope.deleterolebyusername($scope.infouseredit), 3000);
            }, function error(error) {
                alert("error-" + error);
            })
    };
    $scope.saveedituserforadmin = function () {
        var formData = new FormData();
        formData.append('file', $scope.selectUploadFile);
        UploadFactory.saveDoc(formData);
        dataUserFactory.saveedituser($scope.infouseredit)
            .then(function success(response) {
                if ($scope.infouseredit.block === true) {
                    alert("Your account has been locked");
                    delete $localStorage.currentUser;
                    $rootScope.userslogin = "";
                    $http.defaults.headers.common.Authorization = "";
                    $state.go('login');
                } else {
                    // console.log($scope.infouseredit);
                    $timeout($scope.getinfousers(), 8000);
                    alert("update success");
                    $state.go('user');
                }
            }, function error(error) {
                alert("error-" + error);
            })
    };
}
