//
// Caching services, stores and returns data
//
BlosoApp.service('$cache', ['$q', function ($q) {

    /**
     * Store data into cache
     * @param {string} key
     * @param {mixed} data
     * @return {$q.defer.promise}
     */
    this.set = function (key, data)
    {
        var deferred = $q.defer();

        return deferred.promise;
    }

    /**
     * Get data from cache
     * @param {string} key
     * @return {$q.defer.promise}
     */
    this.get = function (key)
    {
        var deferred = $q.defer();

        // if key is set, resolve and return data, if not reject
        if (false) {
            deferred.resolve(data);
        } else {
            deferred.reject();
        }

        return deferred.promise;
    }

    /**
     * Remove all values from cache
     * @return {$q.defer.promise}
     */
    this.clear = function ()
    {
        var deferred = $q.defer;

        return deferred.promise;
    }

}]);