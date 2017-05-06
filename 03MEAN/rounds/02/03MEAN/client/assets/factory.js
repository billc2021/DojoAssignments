app.factory('friendFactory', function($http){
    var factory = {};
    var friend = {};
    var friends = [];

    factory.allFriends = function(callback){
        $http.get('/index').then(function(response){
            // console.log('response from the server',response.data.friends)
            friends = response.data.friends;
            callback(friends);
        });
    }

    factory.newFriend = function(friend, callback){
        $http.post('/new', friend).then(function(response){
            friends.push(response.data.friend);
            callback()
        });
    }

    factory.showFriend = function(friendId, callback){
        // console.log('friendId from factory.showFriend:', friendId)
        $http.get('/show/' + friendId).then(function(response){
            // console.log('response.data.friend from server for showFriend', response.data.friend)
            callback(response.data.friend);
        });
    }

    factory.editFriend = function(friendId, callback){
        $http.put('/edit/' + friendId).then(function(response){
            callback(response.data.friend)
        })
    }

    factory.deleteFriend = function(friendId, callback){
        $http.delete('/delete/' + friendId).then(function(response){
            callback(response.data.friend)
        })
    }

    return factory
});