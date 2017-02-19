angular.module('controllers')
.controller('homeController', ['$scope', '$timeout', '$stateParams', '$state', '$rootScope', 'metaService', 'homeDataFactory', function ($scope, $timeout, $stateParams, $state, $rootScope, metaService, homeDataFactory) {

/* create variable in rootscope for metaService */
	$rootScope.metaservice = metaService;
/*  */

/* set meta title & description */
	$rootScope.metaservice.set("A venture technology company | opusLogica", "We help the bold develop historic products.");
/*  */

/* load $http response data into the controller from homeDataFactory */
	$scope.pageContent = [];

	$scope.getPageContent = function() {
        $scope.pageContent = homeDataFactory.getContent()
        console.log($scope.pageContent);
	}
	$scope.getPageContent();
/* */

/* load $http response data into the controller from homeDataFactory */
	$scope.sectionContent = [];

	$scope.getSectionContent = function() {
        $scope.sectionContent = homeDataFactory.getSections()
        console.log($scope.sectionContent);
	}
	$scope.getSectionContent();
/* */

}]);