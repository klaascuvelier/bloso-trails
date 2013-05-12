//
// Control the app plz
//
BlosoApp.controller('BlosoController', ['$scope', '$bloso', function blosoController ($scope, $bloso) {

    $scope.cities = {};

    $bloso.getCities(function (cities) {
        alert('in');
        console.log(cities);
    });

}]);