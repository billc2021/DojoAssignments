var app = angular.module('app', ['ngRoute'])
.config(function ($routeProvider) {
$routeProvider
  .when('/',{
      templateUrl: 'partials/user_create.html',
      controller: 'userCreateController',
      controllerAs: "uc"
  })
  .when('/dashboard',{
      templateUrl: '/partials/polls_index.html',
      controller: 'pollsIndexController',
      controllerAs: "pi"
  })
  .when('/polls/:id',{
      templateUrl: '/partials/poll_show.html',
      controller: 'showController',
      controllerAs: "sp"
  })
  .when('/create',{
      templateUrl: '/partials/poll_create.html',
      controller: 'pollsCreateController',
      controllerAs: "cp"
  })
  .otherwise({
    redirectTo: '/'
  });
});
