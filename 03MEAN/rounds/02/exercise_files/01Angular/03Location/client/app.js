///////////////////////////////
// MODULE 
///////////////////////////////
app = angular.module('app', ['ngRoute'])


///////////////////////////////
// ROUTES
///////////////////////////////
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/customizeUsers.html',
        controller: 'customizeUsers'
    })
    .when('/list', {
        templateUrl: 'partials/userList.html',
        controller: 'userList'
    })
    .otherwise({
        redirectTo: '/'
    })
})