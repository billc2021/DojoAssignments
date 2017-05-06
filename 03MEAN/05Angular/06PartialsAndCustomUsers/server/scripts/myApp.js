myApp = angular.module('myApp', ['ngRoute'])

myApp.config(function($routeProvider){
    $routeProvider
    .when('/users',{
        templateUrl: 'customizeUsers.html',
        controller: 'CustomizeUsersController'
    })
    .when('/list',{
        templateUrl: 'userList.html',
        controller: 'UserListsController'
    })
})

myApp.controller('CustomizeUsersController', function($scope){
    $scope.users = ['Ted', 'Fred', 'Lucy', 'Wilma']
    console.log($scope.users)
    
    $scope.addUser = function(){
        console.log($scope.user)
        $scope.users.push("Tina")
    }
})
myApp.controller('UserListsController', function($scope){
    $scope.message = "Here's content from the customizeUsers.html file"
})