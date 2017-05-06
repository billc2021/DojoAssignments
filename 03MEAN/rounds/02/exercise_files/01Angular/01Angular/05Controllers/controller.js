var app = angular.module('app', []);

app.controller('StudentsController', function($scope){
    $scope.students = [
        {name: 'Mike', age: 34},
        {name: 'John', age: 24},
        {name: 'Trey', age: 22},
        {name: 'India', age: 25}
    ];

    $scope.addStudent = function(){
        $scope.students.push($scope.newStudent)
        $scope.newStudent = {}
    }
});