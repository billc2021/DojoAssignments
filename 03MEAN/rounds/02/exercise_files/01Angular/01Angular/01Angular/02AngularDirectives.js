var app = angular.module('app', []);

// To gain access to properties of another object inject the other object(s)
app.controller('PlayersController', ['$scope', 'UserFactory', function($scope, UserFactory){
    // to access a method or a property of the injected object 
    UserFactory.addNewUser()
}]);

// The $http service makes AJAX calls to the DB.
