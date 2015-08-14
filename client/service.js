(function() {
    angular
        .module('contactListApp')
        .service('contactService', function ($http, $q) {
            return {
                Get: getContact,
                Save: saveContact,
                Delete: deleteContact
            }

            function getContact() {
                var deferred = $q.defer();
                $http.get('/api/contacts')
                    .then(function (response) {
                        deferred.resolve(response.data);
                    })

                return deferred.promise;
            }

            function saveContact(first, last, age) {
                var deferred = $q.defer();

                var payload = {
                    first: first,
                    last: last,
                    age: age
                };

                $http.post('/api/contacts/', payload)
                    .then(function () {
                        deferred.resolve();
                    });

                return deferred.promise;
            }

            function deleteContact(id){
                var deferred = $q.defer();

                $http.delete('/api/contacts/' + id)
                    .then(function () {
                        deferred.resolve();
                    });

                return deferred.promise;
            }
        });
})();