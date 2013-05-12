//
// Control the app plz
//
BlosoApp.controller('BlosoController', ['$scope', '$bloso', function blosoController ($scope, $bloso) {

    $scope.cities   = [];
    $scope.routes   = [];

    $scope.citiesError  = false;
    $scope.routesError  = false;

    // fetch cities
    $bloso.getCities().then(
        function (cities) {
            $scope.citiesError = false;
            $scope.cities = cities;
        },
        function () {
            $scope.citiesError = true;
        }
    );

}]);