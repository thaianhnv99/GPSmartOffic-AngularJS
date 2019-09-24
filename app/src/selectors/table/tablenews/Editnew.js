'use strict';

angular
    .module('myApp')
    .controller('EditnewController', ['$scope', '$http', 'dataNewFactory', '$location', '$stateParams', 'UploadFactory', '$timeout', function ($scope, $http, dataNewFactory, $location, $stateParams, UploadFactory, $timeout) {
        $scope.NewInfo = {};
        $scope.displayimagesnews = "";

        this.$onInit = function () {
             $scope.showeditinfo();
        };
        $scope.showeditinfo= function(){
            $scope.ID = $stateParams.id;
            console.log($scope.ID);
            dataNewFactory.getnewinfo($scope.ID)
                .then(function (response) {
                        $scope.NewInfo = response.data;
                        $scope.displayimagesnews = "http://localhost:8080/files/" + response.data.images;
                        console.log($scope.NewInfo);
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        };
        $scope.selectUploadFile = "";
        $scope.updateFormnew = function () {
            var formData = new FormData();
            formData.append('file', $scope.selectUploadFile);
            UploadFactory.saveDoc(formData);
            dataNewFactory.updateNew($scope.NewInfo, $scope.ID)
                .then(function success(response) {
                        $location.path('/tablenews');
                        $scope.message = 'User data updated!';
                        $scope.errorMessage = '';

                    },
                    function error(response) {
                        $scope.errorMessage = 'Error updating user!';
                        $scope.message = '';
                    });
        };
        $scope.fileReaderSupported = window.FileReader != null;
        $scope.photoChanged = function (files) {
            if (files != null) {
                var file = files[0];
                $scope.NewInfo.images = file.name;
                console.log($scope.NewInfo.images);
                if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
                    $timeout(function () {
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(file);
                        fileReader.onload = function (e) {
                            $timeout(function () {
                                $scope.displayimagesnews = e.target.result;
                            });
                        }
                    });
                }
            }
        };
    }]);
