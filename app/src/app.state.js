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
            templateUrl: 'selectors/dashboard/dashboard.html',
            controller: 'Shownew'
        })
        .state({
            name: 'tablenews',
            url: '/tablenews',
            templateUrl: 'selectors/table/tablenews/tablenews.html',
            controller: 'TablenewController'
        })
        .state({
            name: 'editcarinfo',
            url: '/editcarinfo/:id',
            templateUrl: 'selectors/table/tablecar/Editcarinfo.html',
            controller: 'EditcarinfoController'
        })
        .state({
            name: 'insertnew',
            url: '/insertnew',
            templateUrl: 'selectors/table/tablenews/insertnew.html',
            controller: 'InsertnewController'
        })
        .state({
            name: 'editnewinfo',
            url: '/editnewinfo/:id',
            templateUrl: 'selectors/table/tablenews/Editnew.html',
            controller: 'EditnewController'
        })
        .state({
            name: 'infor',
            url: '/infor/:id',
            templateUrl: 'selectors/dashboard/infor.html',
            controller: 'Shownew'
        });
    $urlRouterProvider.otherwise('/');
}
