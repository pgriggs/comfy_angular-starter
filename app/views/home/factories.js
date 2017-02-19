angular.module('factories')
    Factories.factory('homeDataFactory', ['$http', function($http) {

    var dataFactory = {};

    dataFactory.getContent = function () {
        var data = [
                {
                    title: 'Bash',
                    desc: 'The most amazing shell in the WORLD',
                    url: 'https://en.wikipedia.org/wiki/Bash_(Unix_shell)',
                    imgUrl: '',
                    bgImgUrl: ''
                },
                {
                    title: 'Follow My Vote',
                    desc: 'Secure online voting using blockchain technologies.',
                    url: 'http://followmyvote.com/',
                    imgUrl: '',
                    bgImgUrl: ''
                },
                {
                    title: 'Envíes',
                    desc: 'A mobile app to send money between the U.S. and Mexico in hours.',
                    url: 'https://enviesapp.com',
                    imgUrl: '',
                    bgImgUrl: ''
                }
            ];
        return data;
    };

    dataFactory.getSections = function () {
        var data = [
                {
                    sec1: 'Welcome, welcome',
                    sec1subheader: 'Example intrasite link using angular\'s uisref attirbute.',
                    sec1subheader2: 'Example intrasite link using standard html href attribute'
                },
                {
                    sec2: 'All data in this page is pulled into the controller from homeDataFactory',
                    sec2subheader: 'The data below is displayed in the view using ng-repeat'
                }
            ];
        return data;
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