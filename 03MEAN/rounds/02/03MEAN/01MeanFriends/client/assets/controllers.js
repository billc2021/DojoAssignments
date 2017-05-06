// console.log('client/assets/controllers.js')

friendApp.controller('indexController', function($scope, $location, friendFactory, $routeParams){
    // console.log('Index Controller was here')
    $scope.friends =  [], $scope.friend = {}

    friendFactory.index(function(friends){
        $scope.friends = friends;
    });

    $scope.delete = function(friendId){
        friendFactory.delete(friendId).then(function(response){
            console.log('response from delete', response)
            friendFactory.index(function(friends){
                $scope.friends = friends;
            });
            
        })
    }
});

friendApp.controller('showController', function($scope, friendFactory, $routeParams){
    // console.log('$routeParams from showFriendsController',$routeParams.id)
    friendFactory.show($routeParams.id, function(friend){
        $scope.friend = friend;
    });
});

friendApp.controller('editController', function($scope, friendFactory, $routeParams, $location){

    friendFactory.show($routeParams.id, function(friend){
        $scope.friend = friend;
    });

    $scope.edit = function(){
        // console.log('edit function has been kicked off')
        // console.log('$scope.friend is ', $scope.friend)
        friendFactory.edit($scope.friend._id, $scope.friend, function(response){
            // console.log('response from factory.edit to editController',response);
            $scope.friend = response;
            $location.url('/');
        });
    }
});

friendApp.controller('newController', function($scope, friendFactory, $routeParams, $location){
    $scope.new = function(){
        console.log('$scope.friend = ', $scope.friend)
        friendFactory.new($scope.friend, function(response){
            $location.url('/');
        });
    }
});