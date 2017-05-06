angular.module('friends').controller('friendsController', ['$scope', '$routeParams', '$location', 'friends',
    function($scope, $routeParams, $location, friends) {
        $scope.authentication = Authentication;

        $scope.create = function() {
            var friend = new friends({
                title: this.title,
                content: this.content
            });

            friend.$save(function(response) {
                $location.path('friends/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.friends = friends.query();
        };

        $scope.findOne = function() {
            $scope.friend = friends.get({
                friendId: $routeParams.friendId
            });
        };

        $scope.update = function() {
            $scope.friend.$update(function() {
                $location.path('friends/' + $scope.friend._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(friend) {
            $scope.article.$remove(function() {
                $location.path('articles');
            });
        };
    }
]);