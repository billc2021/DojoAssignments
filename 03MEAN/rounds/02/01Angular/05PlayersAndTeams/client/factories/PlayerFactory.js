///////////////////////
// PlayerFactory 
///////////////////////
app.factory('PlayerFactory', ['$http', function($http){
    factory = {}
    player = {}
    players = []

    ///////////////////////
    // INDEX 
    ///////////////////////
    factory.index = function(callback){
        callback(players)
    }

    ///////////////////////
    // CREATE 
    ///////////////////////
    factory.create = function(player, callback){
        players.push(player)
        callback(players)
    }

    ///////////////////////
    // DELETE 
    ///////////////////////
    factory.delete = function(id, callback){
        players.splice(id, 1)
        callback(players)
    }

    return factory
}])