///////////////////////
// Product Controller
///////////////////////
app.controller('productController', ['$scope', 'productFactory', function($scope, productFactory){
    $scope.product = {}
    $scope.products = {}

    // Method that when run will set $scope.products = to the returned data from productFactory
    function getProducts(data){
        $scope.products = data;
        $scope.product = {};
    }
    $scope.index = function(){
        productFactory.index(getProducts);
    }

    $scope.index()

    $scope.create = function(){
        $scope.product.qty = 50
        productFactory.create($scope.product, getProducts)
    }

    $scope.delete = function(id){
        productFactory.delete(id, getProducts)
    }
}])