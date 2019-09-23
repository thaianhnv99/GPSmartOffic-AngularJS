'use strict';

angular.module('myApp')
    .directive('viewinfotimesheet', viewinfotimesheet)
    .controller('timesheetController', timesheetController);

timesheetController.$inject = ['$scope', 'dataTimesheetFactory', '$filter'];

function timesheetController($scope, dataTimesheetFactory, $filter) {
    $scope.timesheet = [];
    $scope.infotimesheet = {};

    this.$onInit = function () {
        $scope.startDate = new Date();
        $scope.getlisttimesheet();
    };

    $scope.getlisttimesheetall = function () {
        dataTimesheetFactory.getlisttimesheet()
            .then(function success(response) {
                $scope.timesheet = response.data;
            }, function error(error) {
                alert("error-" + error);
            })
    };

    $scope.getlisttimesheet = function () {
        $scope.startDate = $filter('date')($scope.startDate, "yyyy-MM-dd");
        dataTimesheetFactory.getlistbydatetime($scope.startDate)
            .then(function success(response) {
                $scope.timesheet = response.data;
            }, function error(error) {
                alert("error-" + error);
            })
    };
    $scope.showinfotimesheet = function (timesheet) {
        dataTimesheetFactory.getinfotimesheet(timesheet)
            .then(function success(response) {
                $scope.infotimesheet = response.data;
                console.log($scope.infotimesheet);
            }, function error(error) {
                alert("error-" + error)
            })
    };
    $scope.deletetimesheet = function (timesheet) {
        if (confirm('Do you want delete this user? ' + timesheet.user_name)) {
            dataTimesheetFactory.deletetimesheet(timesheet)
                .then(function success(response) {
                    alert("delete success" + response);
                    $scope.getlisttimesheet();
                }, function error(error) {
                    alert("Error" + error)
                })
        }
    };
    $scope.onDateChanged = function () {
        $scope.startDate = $filter('date')($scope.startDate, "yyyy-MM-dd");
        console.log($scope.startDate);
        dataTimesheetFactory.getlistbydatetime($scope.startDate)
            .then(function success(response) {
                $scope.timesheet = response.data;
            }, function error(error) {
                alert(error);
            });
    };
}

function viewinfotimesheet() {
    var directive = {
        templateUrl: 'selectors/table/tabletimesheet/viewinfotimesheet.html'
    };
    return directive
}
