///////////////////////////////
// customizeUsers CONTROLLER 
///////////////////////////////
app.controller('customizeUsers', ['$scope', 'appFactory', function($scope, appFactory){
    $scope.users = []
    $scope.user = {}

    ///////////////////////////////
    // GET UESRS
    ///////////////////////////////
    function getUsers(factoryUsers){
        $scope.users = factoryUsers
    }
    
    appFactory.index(getUsers)

    ///////////////////////////////
    // INDEX
    ///////////////////////////////  
    $scope.index = function(){
        appFactory.index(getUsers)
    }

    ///////////////////////////////
    // CREATE
    ///////////////////////////////
    $scope.create = function(){
        appFactory.create($scope.user, getUsers)
        $scope.user = {}
    }

    ///////////////////////////////
    // DELETE
    ///////////////////////////////
    $scope.delete = function(id){
        appFactory.delete(id, getUsers)
    }

}])