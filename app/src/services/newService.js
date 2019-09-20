'use strict';

angular
    .module('myApp')
    .config(['$provide', function ($provide) {
        $provide.factory('dataNewFactory', ['$http', function ($http) {
            var dataNewFactory = {
                getListNew: getListNew,
                getnewinfo: getnewinfo,
                getinfo: getinfo,
                addnew: addnew,
                deleteNew: deleteNew,
                updateNew: updateNew
            };

            function getListNew() {
                return $http.get('http://localhost:8080/new/news');
            }

            function getnewinfo(ID) {
                return $http.get('http://localhost:8080/new/news/' + ID);
            }

            function getinfo() {
                return $http.get('http://localhost:8080/new/news/top');
            }

            function addnew(news) {
                return $http.post('http://localhost:8080/new/news', news);
            }

            function updateNew(news, ID) {
                return $http.put('http://localhost:8080/new/news/updatenew/' + ID, news);
            }

            function deleteNew(ID) {
                console.log(ID);
                return $http.delete('http://localhost:8080/new/news/' + ID);
            }

            return dataNewFactory;
        }]);
    }]);
