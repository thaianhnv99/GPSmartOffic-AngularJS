'use strict';

angular.module('myApp', ['ui.router', 'ngMaterial', 'ngMessages', 'ngAria', 'ngAnimate', 'ngStorage', 'angularUtils.directives.dirPagination'])
    .run(run);

run.$inject = ['$http', '$state', '$rootScope', '$localStorage'];

function run($http, $state, $rootScope, $localStorage) {
        // Keep user logged in after page refresh
        if ($localStorage.currentUser) {
            console.log($localStorage.currentUser);
            $rootScope.userslogin = $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
            console.log($http.defaults.headers.common.Authorization);
        }

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            console.log($localStorage.currentUser);
            if (!$localStorage.currentUser) {
                $state.go('login');
            } else {
                // $scope.userlayout = $localStorage.currentUser.users;
                if (toState.data && toState.data.role) {
                    var hasAccess = false;
                    console.log(toState.data.role);
                    $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
                    console.log($http.defaults.headers.common.Authorization);
                    for (var i = 0; i < toState.data.role.length; i++) {
                        if (toState.data.role[i] == $localStorage.currentUser.users.name_role) {
                            hasAccess = true;
                            break;
                        }
                    }
                    if (!hasAccess) {
                        event.preventDefault();
                        $state.go('access-denied');
                    }
                }
            }
        });
    }
