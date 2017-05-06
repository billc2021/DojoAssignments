var app = angular.module('app', ['ngRoute'])
.config(function ($routeProvider) {
$routeProvider
  .when('/customers',{
      templateUrl: 'partials/customers.html',
      controller: 'customersController'
      // controllerAs:
  })
  .when('/orders',{
    templateUrl:'partials/orders.html',
    controller:'ordersController'
  })
  .otherwise({
    redirectTo: '/customers'
  });
});

//.
//config(function(injectables) {
// }).
// run(function(injectables) {
// });
/*Configuration blocks - get executed during the provider registrations and configuration phase. Only providers and constants can be injected into configuration blocks. This is to prevent accidental instantiation of services before they have been fully configured.
Run blocks - get executed after the injector is created and are used to kickstart the application. Only instances and constants can be injected into run blocks. This is to prevent further system configuration during application run time.
*/
