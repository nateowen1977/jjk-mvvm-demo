(function() {
    angular
        .module('contactListApp')
        .service('contactService', function ($http, $q) {
            return {
                Get: getContacts,
            }

            function getContacts() {
                var deferred = $q.defer();
                $http.get('/api/contacts')
                    .then(function (response) {
                        deferred.resolve(response.data);
                    })

                return deferred.promise;
            }
        });
})();