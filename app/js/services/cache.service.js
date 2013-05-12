//
// Caching services, stores and returns data
// This service uses localstorage. If localstorage is not supported, all
// promises will be rejected
//
BlosoApp.service('$cache', ['$q', function ($q) {

    /**
     * Is local storage supported?
     * @return {boolean}
     */
    this.isSupported = function () {
        return 'localStorage' in window && window['localStorage'] !== null;
    }

    /**
     * Store data into cache
     * @param {string} key
     * @param {mixed} data
     * @return {$q.defer.promise}
     */
    this.set = function (key, data)
    {
        var deferred = $q.defer();

        if (this.isSupported()) {
            try {
                window.localStorage.setItem(key, JSON.stringify(data));
                deferred.resolve();
            } catch (e) {
                deferred.reject();
            }
        } else {
            deferred.reject();
        }

        return deferred.promise;
    }

    /**
     * Get data from cache
     * @param {string} key
     * @return {$q.defer.promise}
     */
    this.get = function (key)
    {
        var deferred    = $q.defer(),
            data        = window.localStorage.getItem(key);

        // if key is set, resolve and return data, if not reject
        if (!!data) {
            try {
                deferred.resolve(JSON.parse(data));
            } catch (e) {
                deferred.reject();
            }
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

        if (this.isSupported) {
            window.localStorage.clear();
            deferred.resolve();
        } else {
            deferred.reject();
        }

        return deferred.promise;
    }

}]);