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
            templateUrl: 'selectors/home/home.html',
            controller: 'Shownew'
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
        templateUrl: 'selectors/home/home.html',
        controller: 'Shownew'
    }).state({
        name: 'user',
        url: '/user',
        templateUrl: 'selectors/table/tableusers/user.html',
        controller: 'UserController'
    }).state({
        name: 'edituser',
        url: '/edituser/:id',
        templateUrl: 'selectors/table/tableusers/edituser.html',
        controller: 'edituserController'
    }).state({
        name: 'myprofile',
        url: '/myprofile',
        templateUrl: 'selectors/table/tableusers/myprofile.html'
        // controller: 'myuserController'
    }).state({
        name: 'editprofile',
        url: '/editprofile',
        templateUrl: 'selectors/table/tableusers/editprofile.html',
        controller: 'edituserprofileController'
    }).state({
        name: 'insertnew',
        url: '/insertnew',
        templateUrl: 'selectors/table/tablenews/insertnew.html',
        controller: 'InsertnewController'
    }).state({
        name: 'editnewinfo',
        url: '/editnewinfo/:id',
        templateUrl: 'selectors/table/tablenews/Editnew.html',
        controller: 'EditnewController'
    }).state({
        name: 'infor',
        url: '/infor/:id',
        templateUrl: 'selectors/home/infor.html',
        controller: 'showinfo'
    }).state({
        name: 'tablenews',
        url: '/tablenews',
        templateUrl: 'selectors/table/tablenews/tablenews.html'
    }).state({
        name: 'permission',
        url: '/permission',
        templateUrl: 'selectors/permissions/tablepermission.html',
        controller: 'TablepermissionController'
    }).state('tabletimesheet', {
        url: '/tabletimesheet',
        templateUrl: 'selectors/table/tabletimesheet/timesheet.html',
        controller: 'timesheetController'
    }).state('edittimesheet', {
        url: '/edittimesheet/:id',
        templateUrl: 'selectors/table/tabletimesheet/edittimesheet.html',
        controller: 'edittimesheetController'
    }).state('page-not-found', {
        url: '/page-not-found',
        templateUrl: 'selectors/page-not-found/page-not-found.html'
    })
    // Thang
        .state({
            name: 'tabledepartment',
            url: '/department',
            templateUrl: 'selectors/table/tableDepartment/tableDepartment.html',
            controller: 'DepartmentController'
        }).state({
        name: 'tableeployee',
        url: '/tableeployee',
        templateUrl: 'selectors/table/tableEmployee/tableEmployee.html',
        controller: 'EmployeeController'
    }).state({
        name: 'Editemployee',
        url: '/tableeployee/edit/:id',
        templateUrl: 'selectors/table/tableEmployee/EditEmployee.html',
        controller: 'EmployeeController'
    }).state({
        name: 'ListEmployeeInDepartment',
        url: '/department/display/:idDepartment',
        templateUrl: 'selectors/table/tableDepartment/ListEmployeeInDepartment.html',
        controller: 'DepartmentController'
    }).state({
        name: 'ListPermissionsManager',
        url: '/permissionsManager',
        templateUrl: 'selectors/table/tablePermissons/tablePermissons.html',
        controller: 'PermissionsController'
    }).state({
        name: 'PermissionsUser',
        url: '/PermissionsUser',
        templateUrl: 'selectors/table/PermissonsUser/permissonsUser.html',
        controller: 'permissonsUserController'
    })
    // Dung
        .state({
            name: 'tableproject',
            url: '/tableproject',
            templateUrl: 'selectors/table/tableproject/tableproject.html',
            controller: 'TableprojectController'
        }).state({
        name: 'tableteamlead',
        url: '/tableteamlead',
        templateUrl: 'selectors/table/tableleadteam/tableleadteam.html',
        controller: 'TableleadteamController'
    }).state({
        name: 'leadteaminproject',
        url: '/leadteaminproject/:idproject',
        templateUrl: 'selectors/table/tableproject/listleadteaminproject.html',
        controller: 'TableleadteamController'
    }).state({
        name: 'employeeinleadteam',
        url: '/employeeinleadteam/:idteam',
        templateUrl: 'selectors/table/tableproject/listeameployeeinleadteam.html',
        controller: 'TableleadteamController'
    }).state({
        name: 'employeeinleadteama',
        url: '/employeeinleadteama/:idteam',
        templateUrl: 'selectors/table/tableleadteam/listeameployeeinleadteama.html',
        controller: 'TableleadteamController'
    });
    $urlRouterProvider.otherwise('/page-not-found');
}

