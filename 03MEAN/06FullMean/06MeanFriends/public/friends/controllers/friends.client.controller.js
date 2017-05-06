angular.module('friends').controller('FriendsController', ['$scope', '$routeParams', '$location', 'Authentication', 'Friends',
    function($scope, $routeParams, $location, Authentication, Friends){
        $scope.authentication = Authentication;

        $scope.create = function(){
            var friend = new Friends({
                firstName: this.firstName,
                lastName: this.lastName,
                birthDay: this.birthDay 
            });

            friend.save(function(response){
                $location.path('friends/' + response._id);
            }, function(errorResponse){
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function(){
            $scope.friends = Friends.query()
        };

        $scope.findOne = function(){
            $scope.friend = Friend.get({
                friendId: $routeParams.friendId 
            });
        };

        $scope.update = function(){
            $scope.friend.$update(function(){
                $location.path('friends/' + $scope.friend._id);
            }, function(errorResponse){
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(friend){
            if(friend){
                friend.$remove(function(){
                    for(var i in $scope.friends){
                        if($scope.friends[i] === friend){
                            $scope.friends.splice(i, 1);
                        }
                    }
                });
            }else{
                $scope.friend.$remove(function(){
                    $location.path('friends')
                });
            }
        };
    }
]);