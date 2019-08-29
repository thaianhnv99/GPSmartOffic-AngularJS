'use strict';

angular
    .module('myApp.InsuranceServices', [])
    .config(['$provide', function ($provide) {
        $provide.factory('dataInsuranceFactory', ['$http', function ($http) {
            var dataInsuranceFactory = {
                getlistinsurance: getlistinsurance,
                getinsuranceinfo: getinsuranceinfo,
                addinsurance: addinsurance,
                deleteinsurance: deleteinsurance
            };

            function getlistinsurance() {
                return $http.get('http://localhost:8080/apis/insurance');
            }

            function getinsuranceinfo(idinsurance) {
                return $http.get('http://localhost:8080/apis/insurance/' + idinsurance);
            }

            function addinsurance(insurance) {
                return $http.post('http://localhost:8080/apis/insurance', insurance);
            }
            
            function deleteinsurance(idinsurance) {
                return $http.delete('http://localhost:8080/apis/insurance/' + idinsurance);
            }

            return dataInsuranceFactory;
        }]);
    }]);
