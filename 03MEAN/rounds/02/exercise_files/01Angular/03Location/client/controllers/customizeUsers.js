///////////////////////////////
// customizeUsers CONTROLLER 
///////////////////////////////
app.controller('customizeUsers', ['$scope', 'appFactory', '$location', function($scope, appFactory, $location){
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
        $location.url('/list')
    }

    ///////////////////////////////
    // DELETE
    ///////////////////////////////
    $scope.delete = function(id){
        appFactory.delete(id, getUsers)
    }

}])