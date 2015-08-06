(function(){
    var contactService = function($http, $q){
        return{
            Get: get,
            Save: save
        }

        function get(){
            var deferred = $q.defer();
            $http.get('/api/contacts')
                .then(function(response){
                    deferred.resolve(response.data);
                })

            return deferred.promise;
        }

        function save(first, last){
            var deferred = $q.defer();

            var payload = {
                first: first,
                last: last,
                age: 0
            };

            $http.post('/api/contacts', payload)
                .then(function(){
                    deferred.resolve();
                });

            return deferred.promise;
        }
    };

    angular
        .module('contactListApp', [])
        .service('contactService', contactService)
        .controller('contactListController', function ($scope, contactService){
            $scope.Model = {
                Title : "Services Demo",
                Contact: {
                    FirstName : null,
                    LastName : null
                },
                ContactList : null
            };

            $scope.clear = function(){
                $scope.Model.Contact.FirstName = null;
                $scope.Model.Contact.LastName = null;
            }

            $scope.save = function(){
                if($scope.Model.Contact.FirstName == null || $scope.Model.Contact.LastName == null){
                    alert('enter a full name');
                }

                contactService.Save($scope.Model.Contact.FirstName, $scope.Model.Contact.LastName)
                    .then(function(){
                        contactService.Get().then(function(data){
                            $scope.Model.ContactList = data;

                        });
                        $scope.clear();
                    })
            }

            contactService.Get().then(function(data){
                $scope.Model.ContactList = data;
            })
        });
})();