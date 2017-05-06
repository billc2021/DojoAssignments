app.controller('customersController', ['$scope','userFactory', function($scope, userFactory) {
$scope.greeting = 'Hola!';
$scope.all_users =userFactory.users;
$scope.get_users = function(){userFactory.index();}

this.name_controller = 'Some Awesome Name';
console.log(this);
console.log(app);
}]);
