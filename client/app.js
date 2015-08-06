var app = angular.module('contactListApp', []);

app.controller('contactListController', function($scope) {
    $scope.Model = {
        Title : "Controllers Demo",
        Contact: {
            FirstName : null,
            LastName : null
        }
    };

    $scope.clear = function(){
        $scope.Model.Contact.FirstName = null;
        $scope.Model.Contact.LastName = null;
    }
});