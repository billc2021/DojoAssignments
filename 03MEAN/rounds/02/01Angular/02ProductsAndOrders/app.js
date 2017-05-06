var app = angular.module('app', [])

app.factory('productFactory', ['$http', function($http){
    var factory = {}
    var products = [{name: "hammer", price: "19.99", qty: 50}]

    factory.index = function(callback){
        callback(products);
    }

    factory.create = function(product, callback){
        products.push(product)
        callback(products)
    }

    factory.delete = function(id, callback){
        products.splice(id,1);
        callback(products);
    }

    factory.buy = function(id, callback){
        if(products[id].qty <= 1){
            products[id].qty = 50
        }else{
            products[id].qty -= 1
        }
    }

    return factory
}]);

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

///////////////////////
// Orders Controller
///////////////////////
app.controller('orderController', ['$scope', 'productFactory', function($scope, productFactory){
    $scope.orders = []
    $scope.order = {}

    function getOrders(data){
        console.log('Orders', data)
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