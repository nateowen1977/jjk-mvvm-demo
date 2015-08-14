(function() {
    var app = angular.module('contactListApp');

    app.directive('contactList', function(){
        return{
            restrict: 'E',
            replace: 'true',
            templateUrl: 'templates/contact-list.html',
            scope: {
                contacts: '=',
                onDelete: '&'
            },
            link: function(scope) {
                scope.delete = function (contact) {
                    //get reference to the parent controller's function that was bound to the directive
                    var cb = this.onDelete();
                    //call the function
                    cb(contact);
                }
            }
        };
    });

    app.directive('ageSelector', function(){
        var controller = function($scope){
            $scope.options = [];

            for(var i = 18; i <= 65; i++){
                $scope.options.push(i);
            }
        };

        return{
            restrict: 'E',
            replace: 'true',
            scope: {
                age: '=',
                onDelete: '&'
            },
            template: '<select ng-model="age" ng-options="opt for opt in options" style="height:30px; width:50px;"></select>',
            controller: controller
        };
    });

    //directive for contact form
    //need to use the link function here instead of a controller b/c we are passing back data to the controller that will contain this directive
    app.directive('contactForm', function(){
        return{
            restrict: 'E',
            replace: true,
            scope: {
                onSave: '&'
            },
            templateUrl: 'templates/contact-edit.html',
            link: function(scope){
                scope.model = {
                    FirstName: null,
                    LastName: null,
                    Age: null
                };

                scope.save = function(){
                    //get reference to the parent controller's function that was bound to the directive
                    var cb = this.onSave();
                    //call the function
                    cb(this.model);
                    clear(this);
                }

                scope.clear = function(){
                    clear(this);
                }

                function clear(scope){
                    scope.model = {
                        FirstName: null,
                        LastName: null,
                        Age: null
                    };
                }
            }
        };
    })
})();