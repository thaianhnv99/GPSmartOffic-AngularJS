'use strict';

angular.module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('UploadFactory', ['$http', function ($http) {
            var UploadFactory = {
                saveDoc: saveDoc
            };

            function saveDoc(formData) {
                $http.post('http://localhost:8080/upload', formData, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                });
            }
            return UploadFactory;
        }])
    }]);
