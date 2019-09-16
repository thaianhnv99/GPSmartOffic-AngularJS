'use strict';

angular
    .module('myApp')
    // .directive('showinfonewhome', showinfonewhome)
    .controller('Shownew',['$scope', '$http', 'dataNewFactory', '$location','$stateParams',function($scope, $http, dataNewFactory, $location,$stateParams){

        // this.vm = this;
        $scope.new1 = [];
        $scope.getinfonewhome = {};
        $scope.NewInfo1={};

        this.$onInit = function () {
            $scope.getListNew();
            $scope.showinfo();
        };
        // FIX
        $scope.getListNew = function () {
            dataNewFactory.getListNew()
                .then(function (response) {
                        $scope.new1 = response.data;
                        console.log(response.data);
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        };
        // FIX
        $scope.showinfo= function(){
            $scope.ID = $stateParams.id;
            console.log($scope.ID);
            dataNewFactory.getnewinfo($scope.ID)
                .then(function (response) {
                        $scope.NewInfo1 = response.data;
                        console.log($scope.NewInfo1);
                    },
                    function (error) {
                        $scope.status = 'Unable to load customer data: ' + error.message;
                    });
        };
    }]);

// function showinfonewhome() {
//     var directive = {
//         templateUrl: 'selectors/dashboard/dashboard.html',
//     };
//     return directive;
// }
