app = angular.module('app', [])

app.controller('DataBinding', ['$scope', function($scope){
    $scope.name = 'Toby'
    console.log($scope.name)
}])