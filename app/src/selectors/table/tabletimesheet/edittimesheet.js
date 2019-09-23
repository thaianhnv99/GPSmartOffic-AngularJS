angular.module('myApp')
    .controller('edittimesheetController', edittimesheetController);

edittimesheetController.$inject = ['$scope', '$stateParams', 'dataTimesheetFactory', '$state', '$localStorage'];

function edittimesheetController($scope, $stateParams, dataTimesheetFactory, $state, $localStorage) {
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
                $scope.editinfotimesheet.confirmed_by = $localStorage.currentUser.users.user_name;
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
                $state.go('tabletimesheet');
            }, function error(error) {
                alert(error);
            })
    }

}