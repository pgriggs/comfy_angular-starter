angular.module('controllers')
.controller('homeController', ['$scope', '$timeout', '$stateParams', '$state', '$rootScope', 'metaService', function ($scope, $timeout, $stateParams, $state, $rootScope, metaService) {

/* create variable in rootscope for metaService */
  $rootScope.metaservice = metaService;
/*  */

/* set meta title & description */
  $rootScope.metaservice.set("A venture technology company | opusLogica", "We help the bold develop historic products.");
/*  */



}]);