(function(){
    angular
        .module('contactListApp', [])
        .controller('contactListController', function ($scope){
            $scope.Model = {
                Title : "Directives Demo",
                Contact: {
                    FirstName : null,
                    LastName : null
                },
                Time: null
            };

            $scope.clear = function(){
                $scope.Model.Contact.FirstName = null;
                $scope.Model.Contact.LastName = null;
            }
        })
        .directive('timePicker', timePicker);

    function timePicker() {
        var controller = ['$scope', function($scope){
            var hourOptions = [];
            for(hr = 1; hr <= 12; hr++){
                hourOptions.push({
                    name: hr.toString(),
                    id: hr
                });
            }

            var minuteOptions = [];
            for(minute = 0; minute <= 59; minute++){
                minuteOptions.push({
                    name : minute < 10 ? '0' + minute.toString() : minute,
                    id : minute
                });
            }

            $scope.model = {
                minuteOptions : minuteOptions,
                hourOptions : hourOptions,
                selectedMinute : null,
                selectedHour : null,
                selectedMeridian : 'AM'
            }

            $scope.changeMeridian = function(){
                if($scope.model.selectedMeridian == null || $scope.model.selectedMeridian == 'PM'){
                    $scope.model.selectedMeridian = 'AM'
                } else{
                    $scope.model.selectedMeridian = 'PM';
                }

                calculateTime();
            }

            $scope.$watch('model.selectedMinute', function(){
                calculateTime();
            });

            $scope.$watch('model.selectedHour', function(){
                calculateTime();
            });

            function calculateTime(){
                if($scope.model.selectedMinute){
                    var minute = parseInt($scope.model.selectedMinute.id, 10);
                    if($scope.model.selectedHour){
                        var hour = parseInt($scope.model.selectedHour.id, 10);
                        if($scope.model.selectedMeridian === 'AM'){
                            if(hour === 12){
                                $scope.time = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, minute, 0, 0);
                            } else{
                                $scope.time = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), hour, minute, 0, 0);
                            }
                            return;
                        } else{
                            if(hour === 12){
                                $scope.time = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), hour, minute, 0, 0);
                            } else{
                                $scope.time = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), hour + 12, minute, 0, 0);
                            }
                        }
                    }
                }
            }
        }];

        return {
            restrict: 'E',
            replace: true,
            scope: {
                time : '='
            },
            controller: controller,
            templateUrl: 'template.html'
        };
    }
})();