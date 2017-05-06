///////////////////////
// PlayersController 
///////////////////////
app.controller('PlayersController', ['$scope', 'PlayerFactory', 'TeamFactory', 'AssociationFactory', function($scope, PlayerFactory, TeamFactory, AssociationFactory){
    $scope.player = {}
    $scope.players = []

    ///////////////////////
    // GET 
    ///////////////////////
    function getPlayers(players){
        $scope.players = players
    }

    ///////////////////////
    // INDEX 
    ///////////////////////
    $scope.index = function(){
        PlayerFactory.index(getPlayers)
    }

    $scope.index()

    ///////////////////////
    // CREATE 
    ///////////////////////
    $scope.create = function(){
        PlayerFactory.create($scope.player, getPlayers)
        $scope.player = {}
    }

    ///////////////////////
    // DELETE 
    ///////////////////////
    $scope.delete = function(id){
        PlayerFactory.delete(id, getPlayers)
    }

}])