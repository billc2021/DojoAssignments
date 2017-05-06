var app = angular.module('friendsApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/index', {
        templateUrl: 'partials/index-friends.html',
        controller: 'indexFriendsController'
    })
    .when('/new', {
        templateUrl: 'partials/new-friends.html',
        controller: 'newFriendsController'
    })
    .when('/show/:id', {
        templateUrl: 'partials/show-friends.html',
        controller: 'showFriendsController'
    })
    .when('/edit/:id',{
        templateUrl: 'partials/edit-friends.html',
        controller: 'editFriendsController'
    })
    .otherwise('/index');
});