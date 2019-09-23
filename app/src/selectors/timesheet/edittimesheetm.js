'use strict';

angular.module('myApp')
    .controller('edittimesheetmController', edittimesheetmController);

edittimesheetmController.$inject = ['$scope', '$stateParams', 'dataTimesheetFactory', '$state', '$localStorage'];

function edittimesheetmController($scope, $stateParams, dataTimesheetFactory, $state, $localStorage) {
    $scope.editinfotimesheetm = {};

    this.$onInit = function () {
        $scope.getinfotimesheetm();
    };

    $scope.getinfotimesheetm = function () {
        $scope.editinfotimesheetm.id_timesheet = $stateParams.id;
        dataTimesheetFactory.getinfotimesheetm($scope.editinfotimesheetm)
            .then(function success(response) {
                $scope.editinfotimesheetm = response.data;
                $scope.editinfotimesheetm.confirmed_by = $localStorage.currentUser.users.user_name;
                console.log($scope.editinfotimesheetm);
            }, function error(error) {
                alert(error)
            })
    };

    $scope.updateinfotimesheetm = function () {
        dataTimesheetFactory.edittimesheet($scope.editinfotimesheetm)
            .then(function success(response) {
                alert("Update success");
                $scope.getinfotimesheetm();
                $state.go('membertimesheet');
            }, function error(error) {
                alert(error);
            })
    }

}