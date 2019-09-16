'use strict';
angular
    .module('myApp')
    .directive('showinfonewdirec', showinfonewdirec)
    .directive('insertnew', insertnew)
    .controller('TablenewController',['$scope', '$http', 'dataNewFactory', '$location', '$mdDialog',function($scope, $http, dataNewFactory, $location, $mdDialog){

    // this.vm = this;
    $scope.new = [];
    $scope.newinsert = {};
    $scope.getinfonew = {};

    this.$onInit = function () {
        $scope.getListNew();
        // $scope.showinfonew();
    };
        // FIX
    $scope.getListNew = function () {
        dataNewFactory.getListNew()
            .then(function (response) {
                    $scope.new = response.data;
                    console.log(response.data);
                },
                function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
    };
        // FIX
    $scope.showinfonew= function(i){
        console.log(i);
        dataNewFactory.getnewinfo(i.id_news)
            .then(function (response) {
                    $scope.getinfonew= response.data;
                    console.log($scope.getinfonew.id_news);
                },
                function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
    };

    // $scope.showeditinfo= function(i){
    //     console.log(i);
    //     dataNewFactory.getnewinfo(i.id_news)
    //         .then(function (response) {
    //                 $scope.NewInfo= response.data;
    //                 console.log($scope.NewInfo.id_news);
    //             },
    //             function (error) {
    //                 $scope.status = 'Unable to load customer data: ' + error.message;
    //             });
    // };
    // $scope.updateFormnew = function () {
    //     dataNewFactory.updateNew($scope.NewInfo, $scope.ID)
    //         .then(function success(response) {
    //                 $location.path('/tablenew');
    //                 alert("edit thanh cong");
    //                 $scope.message = 'User data updated!';
    //                 $scope.errorMessage = '';
    //             },
    //             function error(response) {
    //                 $scope.errorMessage = 'Error updating user!';
    //                 $scope.message = '';
    //             });
    // };
        // FIX
    $scope.deleterow = function (i) {
        var id_news = $scope.new[i].id_news;
        dataNewFactory.deleteNew(id_news)
            .then(function success(response) {
                    console.log(id_news);
                    $scope.new.splice(i, 1);
                    alert("Xoa thanh Cong");
                    console.log($scope.new);
                    $scope.message = 'User deleted!';
                    $scope.User = null;
                    $scope.errorMessage = '';
                },
                function error(response) {
                    $scope.errorMessage = 'Error deleting user!';
                    $scope.message = '';
                });
    };

}]);

function insertnew() {
    var directive = {
        templateUrl: 'selectors/table/tablenews/insertnew.html',
    };
    return directive;
}

function showinfonewdirec() {
    var directive = {
        templateUrl: 'selectors/table/tablenews/newshowinfor.html',
    };
    return directive;
}

