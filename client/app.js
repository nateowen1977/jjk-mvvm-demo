(function(){
    var contactService = function(){
        var contactList = [
            {
                FirstName: 'Nate',
                LastName: 'Owen'
            }
        ];

        return{
            Get: get,
            Save: save
        }

        function get(){
            return contactList;
        }

        function save(first, last){
            contactList.push({
                FirstName: first,
                LastName: last
            });
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

                contactService.Save($scope.Model.Contact.FirstName, $scope.Model.Contact.LastName);
                $scope.Model.ContactList = contactService.Get();
                $scope.clear();
            }

            $scope.Model.ContactList = contactService.Get();
        });
})();