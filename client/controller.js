(function(){
    angular
        .module('contactListApp')
        .controller('contactListController', function ($scope, contactService){
            $scope.Model = {
                Title : "Contact List Demo",
                ContactList : null
            };

            $scope.saveContact = function(contact){
                contactService.Save(contact.FirstName, contact.LastName, contact.Age)
                    .then(function(){
                        contactService.Get().then(function(data){
                            $scope.Model.ContactList = data;
                        });
                    })
            };

            $scope.deleteContact = function(contact){
                contactService.Delete(contact.Id)
                    .then(function(){
                        contactService.Get().then(function(data){
                            $scope.Model.ContactList = data;
                        });
                    });
            }

            contactService.Get().then(function(data){
                $scope.Model.ContactList = data;
            })
        });
})();