var app = angular.module('app', ['ui.router', 'controllers', 'services', 'angular-google-adsense']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/');
        

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        // additional example states
        .state('people', {
            url: '/people',
            templateUrl: 'views/product.html',
            controller: 'peopleController'
        }) 

        .state('develop', {
            url: '/develop',
            templateUrl: 'views/product.html',
            controller: 'developController'
        })

        .state('products', {
            url: '/products',
            templateUrl: 'views/product.html',
            controller: 'productController'
        })

        .state('jobs', {
            url: '/jobs',
            templateUrl: 'views/product.html',
            controller: 'jobsController'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'views/product.html',
            controller: 'contactController'
        });

        // use the HTML5 History API e.g. removes the # from the url so search engines will see individual routes
        $locationProvider.html5Mode(true);
        
});