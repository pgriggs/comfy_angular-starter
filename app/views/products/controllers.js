angular.module('controllers')

  .controller('productsController', ['$scope', '$timeout', '$stateParams', '$state', '$rootScope', 'metaService', function ($scope, $timeout, $stateParams, $state, $rootScope, metaService) {

/* create variable in rootscope for metaService */
  $rootScope.metaservice = metaService;
/*  */

/* set meta title & description */
  $rootScope.metaservice.set("products | opusLogica", "A list of products.");
/*  */



}]);