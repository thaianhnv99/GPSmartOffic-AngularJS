'use strict';

angular
    .module('myApp')
    .controller('TableprojectController', TableprojecController);
TableprojecController.$inject = ['$http', '$scope', '$mdDialog', 'dataProjectFactory'];

function TableprojecController($http, $scope, $mdDialog, dataProjectFactory) {
    $scope.project = {};
    $scope.projectbyid = {};
    $scope.projectadd = {};
    $scope.projectupdate = {};


    this.$onInit = function () {
        $scope.getlistproject();
    };

    $scope.getlistproject = function () {
        dataProjectFactory.getlistproject()
            .then(function (response) {
                    $scope.project = response.data;
                },
                function (error) {
                    alert("error load data");
                });
    };
    $scope.getlistprojectbyid = function(id){
        dataProjectFactory.getlistprojectbyid(id)
            .then(function (response) {
                $scope.projectbyid = response.data;
            },
            function (error) {
                alert("error load data");
            });
    };
    $scope.addproject = function () {
        console.log($scope.projectadd);
        dataProjectFactory.addProject($scope.projectadd)
            .then(function success(response) {
                    $scope.projectadd = response.data;
                    alert("Thêm thành công");
                },
                function (error) {
                    alert("loi roi");
                });
    };
    $scope.delproject = function (id) {
        dataProjectFactory.delProject(id)
            .then(function success() {
                alert("xóa thành công");
            },
            function (error) {
                alert("loi roi");
            });
    };

    $scope.updProject = function (project) {
        dataProjectFactory.updProject(project)
            .then(function success() {
                alert("sua thanh cong");
            },function (error) {
                alert("sua khong thanh cong");
            });
    };
}
