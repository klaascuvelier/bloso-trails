Bloso.controller('MtbController', ['$scope', '$route', function ($scope, $route) {
    $scope.currentPosition;
    $scope.marker;

    $scope.page = 'routes';

    $scope.cities = [];
    $scope.city = 0;

    $scope.routes = [];
    $scope.routeId;
    $scope.routeName;
    $scope.routeInfo = {};
    $scope.currentRoute;

    $scope.locating = false;

    $scope.getLocation = function()
    {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.currentPosition = position;
            });
        }
    };

    $scope.$watch('routeId', function () {
        angular.forEach($scope.routes, function (route, index) {
            if (route.otn_id == $scope.routeId) {
                $scope.currentRoute = route;
            }
        });
    });


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


    window.setTimeout(function () {
        $scope.$apply(function () {
            $scope.getLocation();
        });
    }, 500);
}]);