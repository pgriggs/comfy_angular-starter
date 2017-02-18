App.config(function($stateProvider) {
  $stateProvider

  	// homepage route & assets
	.state('home', {
	    url: '/',
	    templateUrl: 'views/home/home.html',
	    controller: 'homeController'
	});
});