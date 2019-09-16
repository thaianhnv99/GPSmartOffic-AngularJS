'use strict';

angular
    .module('myApp')
    .directive('uploadfile', uploadfile);

function uploadfile($parse) {
    var directive = {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.uploadfile);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                })
            })
        }
    };
    return directive;
}
