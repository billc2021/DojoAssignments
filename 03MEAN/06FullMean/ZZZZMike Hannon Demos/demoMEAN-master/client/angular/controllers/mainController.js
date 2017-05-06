console.log('main controller');
/*
An example controller file/placeholder
-- feed data to our different views:
  Get data from factory.
  Determine when to update data in DB (through the factory)
  Can regulate/interact with multiple factories
*/
app.controller('mainController', [
  '$scope',
  'mainFactory',
  // last element of array is the actual function for the controller
  function($scope, mainFactory) {
    $scope.dbResponse;
    mainFactory.index(myRandomThing);
    mainFactory.create();
    // into scope of controller
    function myRandomThing(data){
      console.log(data);
      $scope.dbResponse = data;
    }
  }
]);
