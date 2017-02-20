angular.module('controllers')

  .controller('productsController', ['$scope', '$timeout', '$stateParams', '$state', '$rootScope', 'metaService', 'productsDataFactory', function ($scope, $timeout, $stateParams, $state, $rootScope, metaService, productsDataFactory) {

/* create variable in rootscope for metaService */
  $rootScope.metaservice = metaService;
/*  */

/* set meta title & description */
  $rootScope.metaservice.set("products page title tag | yourSiteName", "Products page meta description.");
/*  */

/* load $http response data into the controller from productsDataFactory */
	$scope.productsData = [];

	$scope.getProducts = function() {
        productsDataFactory.getData()
        	.then(function (response) {
                $scope.productsData = response.data;
                console.log($scope.productsData);
            }, function (error) {
                $scope.status = 'Unable to load data: ' + error.message;
                console.log($scope.status);
            });
	}

	$scope.getProducts();
/* */



}]);