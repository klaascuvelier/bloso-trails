Bloso.controller('RouteListController', ['$scope', '$http', function ($scope, $http) {
    $scope.routesError = false;

    $scope.loadCities = function ()
    {
        $http.get('./data/gemeentes.json')
            .success(function (response) {
                $scope.$parent.cities = response;
            })
    };

    $scope.loadRoutes = function ()
    {
        $scope.routesError = false;

        if (!$scope.city) {
            return;
        }

        $http.get('./route.php?city=' + $scope.city)
            .success(function (response) {
                $scope.$parent.routes = response;
            })
            .error(function (response) {
                console.log(response);
                $scope.routesError = true;
            })
    };

    $scope.$watch('city', function () {
        if ($scope.city) {
            $scope.$parent.city = $scope.city;
            $scope.loadRoutes();
        }
    });

    $scope.loadCities();

    $scope.$parent.page = 'routes';
}]);