angular.module('myApp')
    .controller('edittimesheetController', edittimesheetController);

edittimesheetController.$inject = ['$scope', '$stateParams', 'dataTimesheetFactory'];

function edittimesheetController($scope, $stateParams, dataTimesheetFactory) {
    $scope.editinfotimesheet = {};

    this.$onInit = function () {
        // $scope.startDate = new Date();
        $scope.getinfotimesheet();
    };

    $scope.getinfotimesheet = function () {
        $scope.editinfotimesheet.id_timesheet = $stateParams.id;
        dataTimesheetFactory.getinfotimesheet($scope.editinfotimesheet)
            .then(function success(response) {
                $scope.editinfotimesheet = response.data;
                console.log($scope.editinfotimesheet);
            }, function error(error) {
                alert(error)
            })
    };

    $scope.updateinfotimesheet = function () {
        dataTimesheetFactory.edittimesheet($scope.editinfotimesheet)
            .then(function success(response) {
                alert("Update success");
                $scope.getinfotimesheet();
            }, function error(error) {
                alert(error);
            })
    }

}