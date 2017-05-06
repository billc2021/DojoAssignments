///////////////////////////////
// appFactory  
///////////////////////////////
app.factory('appFactory', ['$http', function($http){

    factory = {}
    user = {}
    users = []

    ///////////////////////////////
    // INDEX 
    ///////////////////////////////
    factory.index = function(callback){
        callback(users)
    }

    ///////////////////////////////
    // CREATE 
    ///////////////////////////////
    factory.create = function(user, callback){
        users.push(user)
        callback(users)
    }

    ///////////////////////////////
    // UPDATE 
    ///////////////////////////////
    factory.update = function(id, user, callback){
        users[id] = user
    }

    ///////////////////////////////
    // DELETE 
    ///////////////////////////////
    factory.delete = function(id, callback){
        users.splice(id, 1)
        callback(users)
    }
    
    return factory
}])