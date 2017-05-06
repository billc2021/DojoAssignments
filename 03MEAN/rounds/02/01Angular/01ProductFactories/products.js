var app = angular.module('app', [])

app.factory('productFactory', ['$http', function($http){
    var factory = {}
    var products = []

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
    return factory
}]);

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

    $scope.create = function(){
        productFactory.create($scope.product, getProducts)
    }

    $scope.delete = function(id){
        productFactory.delete(id, getProducts)
    }
}])