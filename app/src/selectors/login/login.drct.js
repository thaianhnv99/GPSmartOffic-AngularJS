'use strict';

angular.module('myApp')
    .directive('showformlogin', showformlogin);
function showformlogin() {
    var directive = {
        templateUrl: 'selectors/login/login.html'
    };
    return directive;
}
