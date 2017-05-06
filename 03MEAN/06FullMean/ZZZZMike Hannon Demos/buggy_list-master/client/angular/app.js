console.log('ah');
var app = angular.module('app', ['ngRoute'])
.config(function ($routeProvider) {
$routeProvider
  .when('/',{
      templateUrl: 'partials/index.html',
      controller: 'indexController',
      controllerAs: 'idx'
  })
  .when('/dashboard',{
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboard',
      controllerAs: 'dash'
  })
  .when('/users/:userid',{
      templateUrl: 'partials/user.html',
      controller: 'user',
      controllerAs: 'user'
  })
  .otherwise({
    redirectTo: '/'
  });
});
