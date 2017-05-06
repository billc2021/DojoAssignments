///////////////////////
// Orders Controller
///////////////////////
app.controller('orderController', ['$scope', 'productFactory', function($scope, productFactory){
    $scope.orders = []
    $scope.order = {}

    function getOrders(data){
        $scope.orders = data
    }

    $scope.index = function(){
        productFactory.index(getOrders)
    }

    $scope.index()

    $scope.buy = function(id){
        productFactory.buy(id, getOrders)
    }
}])
