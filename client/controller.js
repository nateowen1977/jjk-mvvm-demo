(function(){
    angular
        .module('contactListApp')
        .controller('contactListController', function ($scope, contactService){
            $scope.Model = {
                Title : "Contact List Demo",
                ContactList : null
            };

            $scope.save = function(contact){
                contactService.Save(contact.FirstName, contact.LastName, contact.Age)
                    .then(function(){
                        contactService.Get().then(function(data){
                            $scope.Model.ContactList = data;
                        });
                    })
            };

            $scope.delete = function(contact){
                alert('deleting contact')
            }

            contactService.Get().then(function(data){
                $scope.Model.ContactList = data;
            })
        });
})();