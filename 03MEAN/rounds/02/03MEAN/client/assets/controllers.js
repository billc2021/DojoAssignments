app.controller('indexFriendsController', function($scope, friendFactory){
    $scope.friends = []
    $scope.friend = {}
    friendFactory.allFriends(function(friends){
        $scope.friends = friends;
    });
    $scope.deleteFriend = function(){
        console.log('Delete Friend');
    }
});

app.controller('newFriendsController', function($scope, friendFactory, $location){
    $scope.addFriend = function(){
        friendFactory.newFriend($scope.friend, function(){
            $scope.friend = {}
            $location.url('/index')
        });
    }
});

app.controller('showFriendsController', function($scope, friendFactory, $routeParams){
    // console.log('$routeParams from showFriendsController',$routeParams.id)
    friendFactory.showFriend($routeParams.id, function(friend){
        $scope.friend = friend;
    });
});

app.controller('editFriendsController', function($scope, friendFactory, $routeParams, $location){
    // console.log('$routeParams from editFriendsController',$routeParams.id)
    $scope.update = function(){
        friendFactory.editFriend($routeParams.id, function(friend){
            $scope.friend = friend;
            $location.url('/index')
        });
    }
});