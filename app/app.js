var App = angular.module('App', ['ui.router', 'controllers', 'services', 'angular-google-adsense']);

var Controllers = angular.module('controllers', []);
var Factories = angular.module('factories', []);
var Services = angular.module('services', []);

App.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/');

    // use the HTML5 History API e.g. removes the # from the url, allowing search engines will see individual routes
    $locationProvider.html5Mode(true);
        
});