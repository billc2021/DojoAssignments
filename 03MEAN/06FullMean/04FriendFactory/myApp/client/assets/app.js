var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'index.html',
            // controller: 'friendsController'
        })
        .when('/new',{
            templateUrl: '../partials/new.html',
            controller: 'newController'
        })
        .when('/edit',{
            templateUrl: '../partials/edit.html',
            controller: 'editController'
        })
        .otherwise({
            redirectTo:'/',
            // controller: 'view1Controller'
    })
});