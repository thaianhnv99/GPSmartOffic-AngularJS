'use strict';

angular
    .module('myApp')
    .config(stateConfig);
stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function stateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            name: 'dashboard',
            url: '',
            templateUrl: 'selectors/dashboard/dashboard.html'
        })
        .state({
            name: 'homenews',
            url: '/homenews',
            templateUrl: 'selectors/News/HomeNews.html',
            controller: 'HomenewsController'
        })
        .state({
            name: 'tablenews',
            url: '/tablenews',
            data: {
                role: ['ADMIN']
            },
            templateUrl: 'selectors/table/tablenews/tablenews.html'
        })
        .state({
            name: 'editcarinfo',
            url: '/editcarinfo/:id',
            templateUrl: 'selectors/table/tablecar/Editcarinfo.html',
            controller: 'EditcarinfoController'
        })
        .state({
            name: 'permission',
            url: '/permission',
            templateUrl: 'selectors/permissions/tablepermission.html',
            controller: 'TablepermissionController'
        })
        .state('access-denied', {
            url: '/access-denied',
            templateUrl: 'selectors/access-denied/access-denied.html',
            controller: 'AccessdeniedController'

        })
        .state('page-not-found', {
            url: '/page-not-found',
            templateUrl: 'selectors/page-not-found/page-not-found.html',
            controller: 'PagenotfoundController'

        });
    $urlRouterProvider.otherwise('/page-not-found');
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
