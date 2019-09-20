'use strict';

angular.module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataTimesheetFactory', ['$http', function ($http) {
            var dataTimesheetFactory = {
                getlisttimesheet: getlisttimesheet,
                getinfotimesheet: getinfotimesheet,
                deletetimesheet: deletetimesheet,
                edittimesheet: edittimesheet
            };

            function getlisttimesheet() {
                return $http.get('http://localhost:8080/timesheet/getlisttimesheet')
            }

            function getinfotimesheet(timesheet) {
                return $http.post('http://localhost:8080/timesheet/getinfotimesheet', timesheet)
            }

            function edittimesheet(timesheet) {
                return $http.post('http://localhost:8080/timesheet/edittimesheet', timesheet)
            }

            function deletetimesheet(timesheet) {
                return $http.post('http://localhost:8080/timesheet/deletetimesheet', timesheet)
            }

            return dataTimesheetFactory;
        }]);
    }]);
