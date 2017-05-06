// Data-biding is an automatic way of updating the view whenever the model changes as weill as changing the model when ever the view changes

//////////////////////////
//MODULE Declared
//////////////////////////
var app = angular.module('app', []);


//////////////////////////
//Controller Declared
//////////////////////////
app.controller('myController', ['$scope', function($scope){
    $scope.printController = function(){
        console.log($scope)
    }
}]);