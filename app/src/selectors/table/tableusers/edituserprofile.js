'use strict';

angular
    .module('myApp')
    .controller('edituserprofileController', edituserprofileController);
edituserprofileController.$inject = ['$scope', '$stateParams', 'dataUserFactory', '$timeout', 'UploadFactory', '$state', '$localStorage'];

function edituserprofileController($scope, $stateParams, dataUserFactory, $timeout, UploadFactory, $state, $localStorage) {
    $scope.infousereditprofile = {};
    $scope.displayimagesprofile = "";
    $scope.role = [];
    this.$onInit = function () {
        $scope.getinfousersprofile();
    };
    $scope.getinfousersprofile = function () {
        if ($localStorage.currentUser) {
            $scope.infousereditprofile = $localStorage.currentUser.users;
        }
        $scope.getrolebyusernames($scope.infousereditprofile.user_name);
        dataUserFactory.getinfobyusername($scope.infousereditprofile)
            .then(function success(response) {
                $scope.infousereditprofile = response.data;
                $scope.displayimagesprofile = "http://localhost:8080/files/" + response.data.images;
                console.log($scope.displayimagesprofile);
                console.log($scope.infousereditprofile);
            }, function error(error) {
                alert(error);
            });
    };
    $scope.getrolebyusernames = function (user_name) {
        console.log(user_name);
        dataUserFactory.getrolebyusername(user_name)
            .then(function success(response) {
                console.log(response.data);
                $scope.role = response.data;
            }, function error(error) {
                alert("Not OK");
            })
    };
    $scope.fileReaderSupported = window.FileReader != null;
    $scope.photoChanged = function (files) {
        if (files != null) {
            var file = files[0];
            $scope.infousereditprofile.images = file.name;
            console.log($scope.infousereditprofile.images);
            if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                $timeout(function () {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = function (e) {
                        $timeout(function () {
                            $scope.displayimagesprofile = e.target.result;
                        });
                    }
                });
            }
        }
    };
    $scope.selectUploadFile = "";
    $scope.saveedituserforadminprofile = function () {
        var formData = new FormData();
        formData.append('file', $scope.selectUploadFile);
        UploadFactory.saveDoc(formData);
        dataUserFactory.saveedituser($scope.infousereditprofile)
            .then(function success(response) {
                $timeout($scope.getinfousers(), 8000);
                alert("update success");
                // $state.go('user');
            }, function error(error) {
                alert("error-" + error);
            })
    };
}
