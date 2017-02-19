angular.module('factories')
    Factories.factory('productsDataFactory', ['$http', function($http) {

    var urlBase = 'https://jsonplaceholder.typicode.com/photos';
    var dataFactory = {};

    dataFactory.getData = function () {
        return $http.get(urlBase + '?albumId=1');
    };
/* post, put, delete examples 

    dataFactory.insertCustomer = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateCustomer = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    dataFactory.deleteCustomer = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
*/

    return dataFactory;
}]);