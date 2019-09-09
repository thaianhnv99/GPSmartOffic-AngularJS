'use strict';

angular
    .module('myApp')
    .directive('showinfouserdirective', showinfouserdirective)
    .directive('adduserdirective', adduserdirective)
    .controller('UserController', UserController);
UserController.$inject = ['$scope', 'dataUserFactory'];

function UserController($scope, dataUserFactory) {
    $scope.listuser = [];
    $scope.selectuser = {};
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
        $scope.isASC = !$scope.isASC;
    };
    this.$onInit = function(){
        $scope.getlistusers();
    };
    $scope.getlistusers = function () {
        dataUserFactory.getlistuser()
            .then(function success(response) {
                $scope.listuser = response.data;
                console.log($scope.listuser);
            }, function error(error) {
                alert(error.message);
            });
    };
    $scope.selectinfouser = function (u) {
        console.log(u);
        $scope.selectuser = u;
    };
    $scope.showconfirm = function (objectuser) {
        console.log(objectuser);
        if(confirm('Do you want delete this user?'+ objectuser.user_name)){
            dataUserFactory.deleteuser(objectuser)
                .then(function success(response) {
                    $scope.getlistusers();
                    alert('Da xoa thanh cong');
                },
                    function error(error) {
                        alert("error "+ error);
                    });
        }
    }
}

function adduserdirective() {
    var directive = {
        templateUrl: 'selectors/table/tableusers/adduser.html'
    };
    return directive;
}

function showinfouserdirective() {
    var directive = {
        templateUrl: 'selectors/table/tableusers/usershowinfo.html'
    };
    return directive;
}
