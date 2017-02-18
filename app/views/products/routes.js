App.config(function($stateProvider) {
  $stateProvider

  	// homepage route & assets
	.state('products', {
	    url: '/products',
	    templateUrl: 'views/products/products.html',
	    controller: 'productsController'
	});
});