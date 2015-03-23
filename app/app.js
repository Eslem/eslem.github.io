var app =angular.module("app", ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
 function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/home")

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html"
            }).state('contact', {
                url: "/contact",
                templateUrl: "views/contact.html"
            });

    }]);
