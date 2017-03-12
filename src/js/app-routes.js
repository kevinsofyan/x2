'use strict';

angular.module('angularGruntSeed')

    .config(function($stateProvider, $urlRouterProvider,$locationProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: '/templates/home.html',
                controller: 'HomeController'
            })

        $locationProvider.html5Mode(true).hashPrefix('!');
    });