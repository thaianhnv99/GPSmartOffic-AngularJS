'use strict';

angular
    .module('myApp')
    .directive('tablecarshowinfo', tablecarshowinfo)
    .directive('tablecarAdd', tablecarAdd)
    .controller('TablecarController', TablecarController);
TablecarController.$inject = ['$scope', '$http', 'dataCarFactory', '$location', '$mdDialog'];

function TablecarController($scope, $http, dataCarFactory, $location, $mdDialog) {
    // this.vm = this;
    $scope.car = [];
    $scope.carinsert = {};
    $scope.carshowinfo = {};
    $scope.customFullscreen = true;

    this.$onInit = function () {
        $scope.getListCar();
    };

    $scope.getListCar = function () {
        dataCarFactory.getListCar()
            .then(function (response) {
                    $scope.car = response.data;
                    console.log(response.data);
                },
                function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
    };
    $scope.onshowcardetail = function (i) {
        console.log(i);
        // dataCarFactory.showcarinfo(i.numberplate)
        //     .then(function (response) {
                    $scope.carshowinfo = i;
                    console.log($scope.carshowinfo);
                // },
                // function (error) {
                //     $scope.status = 'Unable to load customer data: ' + error.message;
                // });
    };
    $scope.showConfirm = function (numberplate) {
        // $scope.index = i;
        // console.log($scope.index);
        // var confirm = $mdDialog.confirm()
        //     .title('Bạn có mún delete car!!')
        //     .textContent('delete car in table.')
        //     .ariaLabel('Lucky day')
        //     .targetEvent(ev)
        //     .ok('Delete!')
        //     .cancel('Cancel');
        // $mdDialog.show(confirm).then(function () {
        //     console.log($scope.index);
        //     var numberplate = $scope.car[$scope.index].numberplate;
            dataCarFactory.deletecar(numberplate)
                .then(function success(response) {
                        console.log(numberplate);
                        $scope.getListCar();
                        // $scope.car.splice(i, 1);
                        alert("Xoa thanh Cong");
                        console.log($scope.car);
                        $scope.message = 'User deleted!';
                    },
                    function error(response) {
                        $scope.errorMessage = 'Error delete!';
                    });

        // }, function () {
        //     $scope.status = 'hihi^^.';
        // });
    };
}

function tablecarshowinfo() {
    var directive = {
        templateUrl: 'selectors/table/tablecar/Carshowinfo.html'
    };
    return directive;
}
function tablecarAdd() {
    var directive = {
        templateUrl: 'selectors/table/tablecar/Insertcar.html'
    };
    return directive;
}
