angular.module('friends').config(['$routeProvider',
    function($routeProvider){
        $routeProvider. 
        when('/friends', {
            templateUrl: 'friends/views/list-friends.client.view.html'
        }).
        when('/friends/create', {
            templateUrl: 'friends/views/create-friend.client.view.html'
        }). 
        when('/friends/:friendId', {
            templateUrl: 'friends/views/view-friend.client.view.html'
        }). 
        when('/friends/:friendId/edit', {
            templateUrl: 'article/views/edit-friend.client.view.html'
        });
    }
]);