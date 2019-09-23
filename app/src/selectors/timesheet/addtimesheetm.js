angular.module('myApp')
    .controller('addtimesheetController', addtimesheetController);

addtimesheetController.$inject = ['$scope', '$stateParams', 'dataTimesheetFactory', '$state', '$localStorage', '$filter'];

function addtimesheetController($scope, $stateParams, dataTimesheetFactory, $state, $localStorage, $filter) {
    $scope.addtimesheetm = {};

    this.$onInit = function () {
        $scope.addtimesheetm.user_name = $localStorage.currentUser.users.user_name;
    };

    $scope.addinfotimesheet = function () {
        $scope.addtimesheetm.datetime = $filter('date')($scope.addtimesheetm.datetime, "yyyy-MM-dd");
        console.log($scope.addtimesheetm);
        dataTimesheetFactory.addinfotimesheet($scope.addtimesheetm)
            .then(function success(response) {
                alert("Them thnh cong")
            }, function error(error) {
                alert(error)
            })
    };

}
