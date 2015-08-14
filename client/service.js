(function() {
    angular
        .module('contactListApp')
        .service('contactService', function ($http, $q) {
            return {
                Get: get,
                Save: save
            }

            function get() {
                var deferred = $q.defer();
                $http.get('/api/contacts')
                    .then(function (response) {
                        deferred.resolve(response.data);
                    })

                return deferred.promise;
            }

            function save(first, last, age) {
                var deferred = $q.defer();

                var payload = {
                    first: first,
                    last: last,
                    age: age
                };

                $http.post('/api/contacts', payload)
                    .then(function () {
                        deferred.resolve();
                    });

                return deferred.promise;
            }
        });
})();