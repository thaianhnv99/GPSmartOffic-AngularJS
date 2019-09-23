'use strict';

angular.module('myApp')
    .directive('viewinfotimesheetm', viewinfotimesheetm)
    .controller('timesheetmemberController', timesheetmemberController);

timesheetmemberController.$inject = ['$scope', 'dataTimesheetFactory', '$filter', '$localStorage'];

function timesheetmemberController($scope, dataTimesheetFactory, $filter, $localStorage) {
    $scope.timesheetm = [];
    $scope.infotimesheetm = {};

    this.$onInit = function () {
        $scope.startDate = new Date();
        $scope.getlisttimesheetm();
    };

    $scope.getlisttimesheetallm = function () {
        dataTimesheetFactory.getlisttimesheetm($localStorage.currentUser.users.user_name)
            .then(function success(response) {
                $scope.timesheetm = response.data;
                console.log($scope.timesheetm);
            }, function error(error) {
                alert("error-" + error);
            })
    };

    $scope.getlisttimesheetm = function () {
        $scope.startDate = $filter('date')($scope.startDate, "yyyy-MM-dd");
        dataTimesheetFactory.getlistbydatetimem($localStorage.currentUser.users.user_name, $scope.startDate)
            .then(function success(response) {
                $scope.timesheetm = response.data;
            }, function error(error) {
                alert("error-" + error);
            })
    };
    $scope.showinfotimesheetm = function (timesheet) {
        dataTimesheetFactory.getinfotimesheetm(timesheet)
            .then(function success(response) {
                $scope.infotimesheetm = response.data;
                console.log($scope.infotimesheetm);
            }, function error(error) {
                alert("error-" + error)
            })
    };
    $scope.deletetimesheetm = function (timesheet) {
        if (confirm('Do you want delete this user? ' + timesheet.user_name)) {
            dataTimesheetFactory.deletetimesheet(timesheet)
                .then(function success(response) {
                    alert("delete success" + response);
                    $scope.getlisttimesheetm();
                }, function error(error) {
                    alert("Error" + error)
                })
        }
    };
    $scope.onDateChanged = function () {
        $scope.startDate = $filter('date')($scope.startDate, "yyyy-MM-dd");
        console.log($scope.startDate);
        dataTimesheetFactory.getlistbydatetimem($localStorage.currentUser.users.user_name, $scope.startDate)
            .then(function success(response) {
                $scope.timesheetm = response.data;
            }, function error(error) {
                alert(error);
            });
    };
}

function viewinfotimesheetm() {
    var directive = {
        templateUrl: 'selectors/timesheet/viewinfotimesheetm.html'
    };
    return directive
}
