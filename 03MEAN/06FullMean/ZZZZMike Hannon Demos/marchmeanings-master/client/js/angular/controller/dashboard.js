app.controller('dashboardController', ['$scope','$location', function($scope, $location) {
    /* how do we pass data with a location change:
      1) both current location and new location should require the same factory.
      2) before changing locations, store data in the factory.
      3) when new location loads, get data from the factory.
    */
  $scope.changeLocationAndLog = function(){
    console.log('I am about to change locations');

    $location.url('/login');
  }
}]);
