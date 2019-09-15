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
            url: '/tableeployee/display/:id',
            templateUrl: 'selectors/table/tableDepartment/ListEmployeeInDepartment.html',
            controller: 'DepartmentController'
        });

    $urlRouterProvider.otherwise('/');
}

// .when('/tablecar', {
//     templateUrl: 'selectors/table/tablecar/tablecar.html',
//     controller: 'TablecarController as TablecarController'
// })
// .when('/tableinsurance', {
//     templateUrl: 'selectors/table/tableinsurance/tableinsurance.html',
//     controller: 'TableinsuranceController as TableinsuranceController'
// })
// .when('/editcarinfo/:id', {
//     templateUrl: 'selectors/table/tablecar/Editcarinfo.html',
//     controller: 'EditcarinfoController as EditcarinfoController'
// })
// .when('/demo', {
//     templateUrl: 'selectors/table/tablecar/demo.html',
//     controller: 'AppCtrlprogressLinearDemo1 as AppCtrlprogressLinearDemo1'
// })
// .when('/popular', {
//     templateUrl: 'components/popular/popular.tpl.html',
//     controller: 'PopularController as popular',
//     resolve: {
//         shows: function(ShowService) {
//             return ShowService.getPopular();
//         }
//     }
// })
// .when('/view/:id', {
//     templateUrl: 'components/view/view.tpl.html',
//     controller: 'ViewController as view',
//     resolve: {
//         show: function(ShowService, $route) {
//             return ShowService.get($route.current.params.id);
//         }
//     }
// })
// .otherwise({
//     redirectTo: '/'
// });
// }
