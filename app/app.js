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
            }).state('customers', {
                url: "/customers",
                templateUrl: "views/customers.html"
            }).state('projects', {
                url: "/projects",
                templateUrl: "views/projects.html"
            }).state('tecnologies', {
                url: "/tecnologies",
                templateUrl: "views/tecnologies.html",
                controller:"TecnologiesController"
            });

    }]);
