///////////////////////
// TeamFactory 
///////////////////////
app.factory('TeamFactory', ['$http', function($http){
    factory = {}
    team = {}
    teams = []

    ///////////////////////
    // INDEX 
    ///////////////////////
    factory.index = function(callback){
        callback(teams)
    }

    ///////////////////////
    // CREATE Team 
    ///////////////////////
    factory.create = function(team, callback){
        teams.push(team)
        callback(teams)
    }

    ///////////////////////
    // DELETE Team
    ///////////////////////
    factory.delete = function(id, callback){
        teams.splice(id, 1)
        callback(teams)
    }

    return factory
}])