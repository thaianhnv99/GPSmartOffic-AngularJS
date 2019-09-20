'use strict';

// khi tạo 1 modul js thì phari khai báo modul xuống dưới đây để khởi chạy
angular.module('myApp', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngAria',
    'ngAnimate',
    'ngStorage',
])

    .run(['$http', '$state', '$rootScope', 'AuthService', '$localStorage', function ($http, $state, $rootScope, AuthService, $localStorage) {
        // if (AuthService.user) {
        //     $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        //     console.log($http.defaults.headers.common.Authorization);
        // }
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            console.log(AuthService.user);
            if (!AuthService.user) {
                if (toState.name != 'login' && toState.name != 'register') {
                    event.preventDefault();
                    $state.go('login');
                }
            } else {
                if (toState.data && toState.data.role) {
                    var hasAccess = false;
                    console.log(toState.data.role);
                    console.log(AuthService.user);
                        $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
                        console.log($http.defaults.headers.common.Authorization);
                    for (var i = 0; i < toState.data.role.length; i++) {
                        if (toState.data.role[i] == $localStorage.currentUser.users) {
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
    }])
    .directive('fileMole', ['$Parse', function ($parse) {
        return{
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSeter = model.assign;

                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSeter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }]);

