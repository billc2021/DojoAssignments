var friendApp = angular.module('friendApp', ['ngRoute']);

friendApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/index.html',
        controller: 'indexController'
    })
    .when('/show/:id', {
        templateUrl: 'partials/show.html',
        controller: 'showController'
    })
    .when('/edit/:id',{
        templateUrl: 'partials/edit.html',
        controller: 'editController'
    })
    .when('/new', {
        templateUrl: 'partials/new.html',
        controller: 'newController'
    })
})