'use strict';

angular.module('myApp')
    .directive('viewinfotimesheet', viewinfotimesheet)
    .controller('timesheetController', timesheetController);

timesheetController.$inject = ['$scope', 'dataTimesheetFactory'];

function timesheetController($scope, dataTimesheetFactory) {
    $scope.timesheet = [];
    $scope.infotimesheet = {};

    this.$onInit = function () {
        $scope.getlisttimesheet();
    };

    $scope.getlisttimesheet = function () {
        dataTimesheetFactory.getlisttimesheet()
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
    }
}

function viewinfotimesheet() {
    var directive = {
        templateUrl: 'selectors/table/tabletimesheet/viewinfotimesheet.html'
    };
    return directive
}
