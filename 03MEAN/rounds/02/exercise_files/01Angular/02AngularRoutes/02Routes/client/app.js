app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'partials/sports.html',
        controller: 'sportsController'
    })
    .when('/message', {
        templateUrl: 'partials/message.html',
        controller: 'messageController'
    })
    .otherwise('/')
})