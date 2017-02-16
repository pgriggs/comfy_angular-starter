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
            url: '/products',
            templateUrl: 'views/product.html',
            controller: 'productsController'
        });

        // use the HTML5 History API e.g. removes the # from the url so search engines will see individual routes
        $locationProvider.html5Mode(true);
        
});