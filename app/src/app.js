'use strict';

// khi tạo 1 modul js thì phari khai báo modul xuống dưới đây để khởi chạy
angular.module('myApp', [
    'ui.router',
    'myApp.state',
    'myApp.tablecar',
    'myApp.CarServices',
    'myApp.Insertcar',
    'myApp.editcarinfo',
    'myApp.version'
]);
