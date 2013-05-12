//
// Controller for selecting citie and route
//
BlosoApp.controller('SelectController', ['$scope', '$bloso', function ($scope, $bloso) {

    $scope.$watch('cityId', function () {
        if ($scope.cityId) {
            $bloso.setCityId($scope.cityId);
        }
    });

}]);