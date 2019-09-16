'use strict';

angular
    .module('myApp')
    .directive('showinfouserdirective', showinfouserdirective)
    .controller('UserController', UserController);
UserController.$inject = ['$scope', 'dataUserFactory', '$localStorage'];

function UserController($scope, dataUserFactory, $localStorage) {
    $scope.listuser = [];
    $scope.selectuser = {};
    $scope.role = [];
    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
        $scope.isASC = !$scope.isASC;
    };
    this.$onInit = function () {
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
    $scope.selectinfouser = function (u) {
        console.log(u);
        $scope.getrolebyusernames(u.user_name);
        dataUserFactory.getinfobyusername(u)
            .then(function success(response) {
                $scope.selectuser = response.data;
                console.log($scope.selectuser);
            }, function error(error) {
                alert(error)
            });
    };
    $scope.showconfirm = function (objectuser) {
        console.log(objectuser);
        if (confirm('Do you want delete this user? ' + objectuser.user_name)) {
            if (objectuser.user_name === $localStorage.currentUser.users.user_name) {
                alert("Khong the xoa");
            } else {
                dataUserFactory.deleteuser(objectuser)
                    .then(function success(response) {
                            $scope.getlistusers();
                            alert('Da xoa thanh cong');
                        },
                        function error(error) {
                            alert("error " + error);
                        });
            }
        }
    }
}

function showinfouserdirective() {
    var directive = {
        templateUrl: 'selectors/table/tableusers/usershowinfo.html'
    };
    return directive;
}
