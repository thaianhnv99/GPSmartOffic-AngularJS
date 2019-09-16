'use strict';

angular
    .module('myApp')
    .config(stateConfig);
stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function stateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            name: 'home',
            url: '',
            templateUrl: 'selectors/News/HomeNews.html',
            controller: 'HomenewsController'
        }).state({
        name: 'homenews',
        url: '/homenews',
        templateUrl: 'selectors/News/HomeNews.html',
        controller: 'HomenewsController'
    }).state({
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'selectors/dashboard/dashboard.html'
    }).state({
        name: 'login',
        url: '/login',
        templateUrl: 'selectors/dashboard/dashboard.html'
    }).state({
        name: 'user',
        url: '/user',
        data: {
            role: ['ADMIN']
        },
        templateUrl: 'selectors/table/tableusers/user.html',
        controller: 'UserController'
    }).state({
        name: 'edituser',
        url: '/edituser/:id',
        data: {
            role: ['ADMIN']
        },
        templateUrl: 'selectors/table/tableusers/edituser.html',
        controller: 'edituserController'
    }).state({
        name: 'myprofile',
        url: '/myprofile',
        data: {
            role: ['ADMIN']
        },
        templateUrl: 'selectors/table/tableusers/myprofile.html'
        // controller: 'myuserController'
    }).state({
        name: 'editprofile',
        url: '/editprofile',
        data: {
            role: ['ADMIN']
        },
        templateUrl: 'selectors/table/tableusers/editprofile.html',
        controller: 'edituserprofileController'
    }).state({
        name: 'tablenews',
        url: '/tablenews',
        data: {
            role: ['ADMIN']
        },
        templateUrl: 'selectors/table/tablenews/tablenews.html'
    }).state({
        name: 'editcarinfo',
        url: '/editcarinfo/:id',
        templateUrl: 'selectors/table/tablecar/Editcarinfo.html',
        controller: 'EditcarinfoController'
    }).state({
        name: 'permission',
        url: '/permission',
        templateUrl: 'selectors/permissions/tablepermission.html',
        controller: 'TablepermissionController'
    }).state('access-denied', {
        url: '/access-denied',
        templateUrl: 'selectors/access-denied/access-denied.html'
        // controller: 'AccessdeniedController'

    }).state('page-not-found', {
        url: '/page-not-found',
        templateUrl: 'selectors/page-not-found/page-not-found.html',
        controller: 'PagenotfoundController'

    })
    $urlRouterProvider.otherwise('/page-not-found');
}

