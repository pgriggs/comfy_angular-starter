/* 
Duplicate this file and rename 'productsController' to create a new controller availble in the controllers module.	
 */

angular.module('controllers')

  .controller('productsController', ['$scope', '$timeout', '$stateParams', '$state', '$rootScope', 'metaService', 
	function ($scope, $timeout, $stateParams, $state, $rootScope, metaService) {
  'use strict';

/* create variable in rootscope for metaService */
  $rootScope.metaservice = metaService;
/*  */

/* set meta title & description */
  $rootScope.metaservice.set("products | opusLogica", "A list of products.");
/*  */



}]);