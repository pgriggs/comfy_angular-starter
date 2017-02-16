angular.module('controllers')

  .controller('homeController', ['$scope', '$timeout', '$stateParams', '$state', '$rootScope', 'metaService', 
	function ($scope, $timeout, $stateParams, $state, $rootScope, metaService) {
  'use strict';

/* create variable in rootscope for Metaservice */
  $rootScope.metaservice = metaService;

  /* set meta title & description */
  $rootScope.metaservice.set("A venture technology company | opusLogica", "We help the bold develop histric products.");  
  /*  */

/*  */


/* Bind state parameters to the scope? */
  $scope.productName = $stateParams.productName;
  $scope.compareProduct1 = $stateParams.compareProduct1;
  $scope.compareProduct2 = $stateParams.compareProduct2;
/*  */


}]);