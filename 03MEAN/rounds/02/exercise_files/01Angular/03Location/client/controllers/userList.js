///////////////////////////////
// userList CONTROLLER 
///////////////////////////////
app.controller('userList', ['$scope', 'appFactory', function($scope, appFactory){

    function getUsers(factoryUsers){
        $scope.users = factoryUsers
    }
    
    appFactory.index(getUsers)
}])