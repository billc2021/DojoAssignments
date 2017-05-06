app.controller('newController', ['$scope','userFactory', function($scope) {
    $scope.addUser = function(){
    console.log($scope.user);
    }
}]);