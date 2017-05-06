///////////////////////////
// Show Controller
///////////////////////////
app.controller('ShowCtrl', function($scope, $location, appFactory, $routeParams, $filter){
    // console.log($routeParams.id);
    appFactory.getItem($routeParams.id).then(function(response){
        // console.log('response = ', response);
        $scope.item = response
        // console.log($scope.item);
    });

    $scope.update = function(){
        // console.log($scope.item)
        appFactory.update($routeParams.id, $scope.item).then(function(response){
            $scope.item = response.data;
            $location.url('/');
        });
    };
});
