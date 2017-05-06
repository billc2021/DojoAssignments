app.controller('IndexCtrl', function($scope, appFactory, $location, $routeParams){
    $scope.items = []
    $scope.item = {}

    //////////////
    // READ - Get ALL items
    //////////////
    function getItems(){
        appFactory.getItems().then(function(response){
            // console.log(response);
            $scope.items = response;
        });
    }

    getItems();

    //////////////
    // CREATE
    //////////////
    $scope.createItem = function(){
        // console.log('$scope', $scope.item);
        appFactory.createItem( $scope.item ).then(function(){
            $scope.item = {};
            $location.url('/')
        })
    }

    //////////////
    // UPDATE
    //////////////
    $scope.updateItem = function(){
        appFactory.updateItem($scope.item._id, $scope.friend).then(function(response){
            $location.url('/');
        })
    }

    //////////////
    // DELETE
    //////////////
    $scope.deleteItem = function(id){
        appFactory.deleteItem(id).then(function(response){
            getItems();
            $location.url('/');
        })
    }


})