// console.log('client/assets/factory.js')

friendApp.factory('friendFactory', function($http){
    var factory = {}, friend = {}, friends = [];

    // INDEX
   factory.index = function(callback){
       $http.get('/index').then(function(response){
        //    console.log('Response from server for $http.get for /index', response.data.friends);
           callback(response.data.friends)
       });
   };

   // SHOW
    factory.show = function(friendId, callback){
        // console.log('friendId from factory.showFriend:', friendId)
        $http.get('/show/' + friendId).then(function(response){
            // console.log('response.data.friend from server for showFriend', response.data.friend)
            callback(response.data.friend);
        });
    };

    // EDIT
    factory.edit = function(friendId, friend, callback){
        // console.log('friend from factory is', friend)
        $http.put('/edit/'+friendId, { first_name: friend.first_name, last_name: friend.last_name, birthday: friend.birthday }).then(function(response){
            callback(response.data.friend)
        });
    };

    // NEW
    factory.new = function(friend, callback){
        $http.post('/new',{ first_name: friend.first_name, last_name: friend.last_name, birthday: friend.birthday}).then(function(response){
            callback(response.data.friend)
        });
    };

    // DELETE
    factory.delete = function(friendId){
        return $http.delete('/delete/' + friendId)
    }

    return factory;
});