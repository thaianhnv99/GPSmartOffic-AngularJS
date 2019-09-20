'use strict';

angular
    .module('myApp')
    .config(stateConfig);
stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function stateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            name: 'dashboard',
            url: '/',
            templateUrl: 'selectors/dashboard/dashboard.html'
        })
        .state({
            name: 'tabledepartment',
            url: '/department',
            templateUrl: 'selectors/table/tableDepartment/tableDepartment.html',
            controller: 'DepartmentController'
        })
        .state({
            name: 'tableeployee',
            url: '/tableeployee',
            templateUrl: 'selectors/table/tableEmployee/tableEmployee.html',
            controller: 'EmployeeController'
        })
        .state({
            name: 'Editemployee',
            url: '/tableeployee/edit/:id',
            templateUrl: 'selectors/table/tableEmployee/EditEmployee.html',
            controller: 'EmployeeController'
        })
        .state({
            name: 'ListEmployeeInDepartment',
            url: '/department/display/:idDepartment',
            templateUrl: 'selectors/table/tableDepartment/ListEmployeeInDepartment.html',
            controller: 'DepartmentController'
        })
        .state({
            name: 'ListPermissionsManager',
            url: '/permissionsManager',
            templateUrl: 'selectors/table/tablePermissons/tablePermissons.html',
            controller: 'PermissionsController'
        })
        .state({
            name: 'PermissionsUser',
            url: '/PermissionsUser',
            templateUrl: 'selectors/table/PermissonsUser/permissonsUser.html',
            controller: 'permissonsUserController'
        });

    $urlRouterProvider.otherwise('/');
}

