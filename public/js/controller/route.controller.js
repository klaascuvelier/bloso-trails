Bloso.controller('RouteController', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    var map = document.getElementById('map');

    $scope.loadRoute = function ()
    {
        $http.get('./route.php?track=' + $scope.routeId)
            .success(function (response) {
                $scope.routeInfo = response.result;
            })
            .error(function () {
                alert('error');
            })
    };

    $scope.drawRoute = function ()
    {
        if (!$scope.routeInfo.levels || !$scope.routeInfo.line) {
            return;
        }

        var route       = $scope.routeInfo,
            polyline    = new GPolyline.fromEncoded({
            color: '#654b2a',
            weight: 3,
            opacity: 1,

            points: route.line,
            levels: route.levels,

            zoomFactor: 2,
            numLevels: 18
        });



        $scope.googleMap.addOverlay(polyline);

        if ($scope.currentRoute) {
            $scope.googleMap.setCenter(new GLatLng($scope.currentRoute.lat_begin, $scope.currentRoute.lon_begin), 12);
        }

    };


    $scope.toggleLocating = function ()
    {
        $scope.$parent.locating = !$scope.$parent.locating;

        window.clearTimeout($scope.timerId);

        if ($scope.$parent.locating) {
            $scope.googleMap.setZoom(16);
            $scope.polLocation();
        } else if ($scope.marker) {
            $scope.googleMap.clearOverlays();
            $scope.marker = false;
        }
    };


    $scope.polLocation = function ()
    {
        $scope.updateLocation();
        $scope.timerId = window.setTimeout(function () {
            $scope.polLocation();
        }, 1000);
    };


    $scope.updateLocation = function()
    {
        $scope.getLocation();

        if ($scope.currentPosition) {
            var coords  = $scope.currentPosition.coords,
                point   = new GLatLng(coords.latitude, coords.longitude),
                isNew   = !$scope.marker;

            $scope.marker = new GMarker(point, true);

            if (isNew) {
                $scope.googleMap.addOverlay($scope.marker);
            }

            $scope.googleMap.setCenter(point);
        }
    }


    // watch change of route info -> draw route
    $scope.$watch('routeInfo', function () {
        $scope.drawRoute();
    }, true);

    if (!$scope.routes || !$scope.routes.length > 0) {
        $location.path('/select');
    }

    // watch change of route id -> load info
    $scope.$watch('routeId', function () {
        $scope.loadRoute();
    });

    $scope.$parent.routeId = $routeParams.routeId;



    $scope.googleMap    = new GMap2(map);
    $scope.googleMap.enableContinuousZoom();

    $scope.$parent.page = 'route';

}]);

//http://stackoverflow.com/questions/10881105/google-maps-api-v3-port
