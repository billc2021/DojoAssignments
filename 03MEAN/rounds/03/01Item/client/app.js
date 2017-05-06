var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/partials/index.html',
        controller: 'IndexCtrl'
    })
    .when('/items', {
        templateUrl: '/partials/items.html',
        controller: 'IndexCtrl'
    })
    .when('/items/create', {
        templateUrl: '/partials/create.html',
        controller: 'IndexCtrl'
    })
    .when('/items/:id', {
        templateUrl: '/partials/item.html',
        controller: 'ShowCtrl'
    })
    .otherwise({
        redirectTo: '/'
    })
});