//
// Initialize Bloso MTB App
//
var BlosoApp = angular.module('BlosoApp', [])
    // set square brackets
    .config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/select', { templateUrl: 'partials/route-list.html', controller: 'SelectController' })
            // .when('/route/:cityId/:routeId', { templateUrl: 'partials/route.html', controller: 'RouteController' })
            .otherwise({redirectTo: '/select'});
    }]);