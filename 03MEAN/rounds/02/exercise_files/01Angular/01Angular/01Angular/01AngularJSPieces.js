///////////////////////////////////
// AngularJS module directive:
///////////////////////////////////
var app = angular.module('app', []);


///////////////////////////////////
// AngularJS controller directive(s):
///////////////////////////////////
app.controller('PlayersController', ['$scope', function($scope){
    // javascript that controls the Player view
}]);

app.controller('AssociationsController', ['$scope', function($scope){
    // javascript that controls the Associations view
}]);

app.controller('TeamsController', ['$scope', function($scope){
    // javascript that controls the Teams view
}])


///////////////////////////////////
// AngularJS Factories
///////////////////////////////////

/*
    - Factories are singleton objects (created once per page)
    - They hold data and methods for manipulating that data
    = The communicate with hthe server via $http request
    = They are injected as dependencies into other Angular directives
*/
app.factory('PlayerFactory', ['$http', function($http){
    var players = {}; // object that holds
    return players;
}]);

app.factory('TeamFactory',['$http', function($http){
    return {
        // object that holds methods and public properties for teams
    };
}]);