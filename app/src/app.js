'use strict';

angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'ngAria', 'ngAnimate', 'ngStorage', 'angularUtils.directives.dirPagination'])
    .run(run);

run.$inject = ['$http', '$state', '$rootScope', '$localStorage', 'dataUserFactory'];

function run($http, $state, $rootScope, $localStorage, dataUserFactory) {
    // Keep user logged in after page refresh
    if ($localStorage.currentUser) {
        console.log($localStorage.currentUser);
        $rootScope.userslogin = $localStorage.currentUser;
        $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        console.log($http.defaults.headers.common.Authorization);
        dataUserFactory.getquantity()
            .then(function success(response) {
                $rootScope.soluong = response.data.soluong;
                console.log($rootScope.soluong);
            });
    }

    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$stateChangeStart', function (event, toState) {
        console.log($localStorage.currentUser);
        if (!$localStorage.currentUser) {
            $state.go('login');
        } else {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
            console.log($http.defaults.headers.common.Authorization);
        }
    });
}
