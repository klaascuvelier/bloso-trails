//
// Bloso service, providing data to the app
// Methods in this service should always return promises
//
BlosoApp.factory('$bloso', ['$http', '$q', function $blosoService($http, $q) {

    var $bloso = {
        cities  : [],
        tracks  : [],
        city    : null,

        /**
         * Returns an 2d array of cities and their code in routeyou
         * @return {$q.promise}
         */
        getCities: function () {

            var result = $q.defer;

            if (!this.cities.length) {

            } else {
                $promise.resolve(this.cities);
            }

            return result.promise;
        }


    }

    return $bloso;

}]);