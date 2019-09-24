'use strict';

angular.module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataTimesheetFactory', ['$http', function ($http) {
            var dataTimesheetFactory = {
                getlisttimesheet: getlisttimesheet,
                getinfotimesheet: getinfotimesheet,
                getlistbydatetime: getlistbydatetime,
                deletetimesheet: deletetimesheet,
                edittimesheet: edittimesheet,
                // member
                addinfotimesheet: addinfotimesheet,
                getlisttimesheetm: getlisttimesheetm,
                getinfotimesheetm: getinfotimesheetm,
                getlistbydatetimem: getlistbydatetimem
            };

            function getlisttimesheet() {
                return $http.get('http://localhost:8080/timesheet/getlisttimesheet')
            }

            function getinfotimesheet(timesheet) {
                return $http.post('http://localhost:8080/timesheet/getinfotimesheet', timesheet)
            }

            function getlistbydatetime(datetime) {
                return $http.get('http://localhost:8080/timesheet/getlistbydatetime/' + datetime)
            }

            function edittimesheet(timesheet) {
                return $http.post('http://localhost:8080/timesheet/edittimesheet', timesheet)
            }

            function deletetimesheet(timesheet) {
                return $http.post('http://localhost:8080/timesheet/deletetimesheet', timesheet)
            }

            // member
            function addinfotimesheet(timesheet) {
                return $http.post('http://localhost:8080/timesheet/addinfotimesheet', timesheet)
            }

            function getlisttimesheetm(user_name) {
                return $http.get('http://localhost:8080/timesheet/getlisttimesheetm/' + user_name)
            }

            function getinfotimesheetm(timesheet) {
                return $http.post('http://localhost:8080/timesheet/getinfotimesheetm', timesheet)
            }

            function getlistbydatetimem(user_name, datetime) {
                return $http.get('http://localhost:8080/timesheet/getlistbydatetimem/' + user_name + "/" + datetime)
            }

            return dataTimesheetFactory;
        }]);
    }]);
