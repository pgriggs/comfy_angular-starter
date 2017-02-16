/* 
Duplicate this file and rename 'homeController' to create a new controller availble in the controllers module.	
 */

angular.module('controllers')

  .controller('homeController', ['$scope', '$timeout', '$stateParams', '$state', '$rootScope', 'metaService', 
	function ($scope, $timeout, $stateParams, $state, $rootScope, metaService) {
  'use strict';

/* create variable in rootscope for metaService */
  $rootScope.metaservice = metaService;
/*  */

/* set meta title & description */
  $rootScope.metaservice.set("A venture technology company | opusLogica", "We help the bold develop historic products.");
/*  */



}]);