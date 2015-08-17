(function(){
    angular
        .module('contactListApp')
        .controller('contactListController', function ($scope, contactService){
            $scope.Model = {
                Title : "Contact List Demo",
                ContactList : null
            };

            contactService.Get().then(function(data){
                $scope.Model.ContactList = data;
            })
        });
})();