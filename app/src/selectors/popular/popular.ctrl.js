'use strict';
angular
    .module('myApp.core')
    .controller('PopularController', function($scope, PageValues, shows) {
        //Set page title and description
        PageValues.title = "POPULAR";
        PageValues.description = "The most popular TV shows.";
        //Setup view model object
        var vm = this;
        vm.shows = shows;
    });
