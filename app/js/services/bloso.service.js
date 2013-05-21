//
// Bloso service, providing data to the app
// Methods in this service should always return promises
//
BlosoApp.factory('$bloso', ['$http', '$q', '$cache', 'url-cities', function $blosoService($http, $q, $cache, urlCities) {

    var $bloso = {
        cities  : [],
        tracks  : [],
        city    : null,

        /**
         * Returns an 2d array of cities and their code in routeyou
         * @return {$q.promise}
         */
        getCities: function () {

            var deferred    = $q.defer(),
                _this       = this;

            // if cities are not loaded yet, check if they are in cache
            // if not, load from server
            if (!this.cities.length) {

                $cache.get('cities').then(
                    function (data) {
                        _this.cities = data;
                        deferred.resolve(data);
                    },
                    function () {
                        $http.get(urlCities)
                            .success(function (response) {
                                _this.cities = response;
                                // don't need the deferred here, if it fails to store in cache, no biggy
                                $cache.set('cities', response);
                                deferred.resolve(response);
                            })
                            .error(function () {
                                // well this is embarassing, apparently data doesn't load
                                deferred.reject();
                            });
                    }
                );

            } else {
                deferred.resolve(this.cities);
            }

            return deferred.promise;
        },

        /**
         * Store selected cityId
         * @param {integer} cityId
         * @return {$bloso}
         */
        setCityId: function (cityId) {
            $cache.set('cityId', cityId);
            return this;
        },

        /**
         * Get selected cityId, if any
         * @return {$q.deferred.promise}
         */
        getCityId: function () {
            var deferred = $q.defer();

            $cache.get('cityId').then(
                function (data) {
                    deferred.resolve(data);
                },
                function () {
                    deferred.reject();
                }
            );

            return deferred.promise;
        }


    }

    return $bloso;

}]);