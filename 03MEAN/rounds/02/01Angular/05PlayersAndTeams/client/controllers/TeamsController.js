///////////////////////
// TeamsController 
///////////////////////
app.controller('TeamsController', ['$scope', 'PlayerFactory', 'TeamFactory', 'AssociationFactory', function($scope, PlayerFactory, 
TeamFactory, AssociationFactory){
    $scope.team = {}
    $scope.teams =[]

    ///////////////////////
    // GET 
    ///////////////////////
    function getTeams(teams){
        $scope.teams = teams
    }

    ///////////////////////
    // INDEX 
    ///////////////////////
    $scope.index = function(){
        TeamFactory.index(getTeams)
    }

    $scope.index()

    ///////////////////////
    // CREATE 
    ///////////////////////
    $scope.create = function(){
        TeamFactory.create($scope.team, getTeams)
        $scope.team = {}
    }

    ///////////////////////
    // DELETE 
    ///////////////////////
    $scope.delete = function(id){
        TeamFactory.delete(id, getTeams)
    }

}])