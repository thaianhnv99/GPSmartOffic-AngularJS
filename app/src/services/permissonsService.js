'use strict';

angular
    .module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataFactoryPermission', ['$http', function ($http) {
            var dataFactoryPermission = {
                Getlist: getlist,
                Getlistbyid : getlistbyid,
                UpdatePermission: updatePermission,
                GetListPermissionAOneUser : getListPermissionAOneUser,
                AddPermissions : addPermissions
            };

            function getlist() {
                return $http.get('http://localhost:8080/apis/permissions');
                console.log("get list permissions");
            }

            function getlistbyid(object) {
                return $http.post('http://localhost:8080/apis/permissionsById', object);
                console.log("get list by id");
            }
            function updatePermission(object) {
                return $http.put('http://localhost:8080/apis/updatePermissions', object);
                console.log("update permissions");
            }
            function getListPermissionAOneUser(id) {
                return $http.post('http://localhost:8080/apis/permissionsOneUser', id);
                console.log("get List Permission One User");
            }

            function addPermissions(object) {
                return $http.post('http://localhost:8080/apis/addPermissionsOfUser', object);
                console.log("Add Permission One User");
            }

            return dataFactoryPermission;
        }]);
    }]);
