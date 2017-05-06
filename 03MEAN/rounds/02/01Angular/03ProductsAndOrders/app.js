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

    factory.buy = function(id, callback){
        if(products[id].qty <= 1){
            products[id].qty = 50
        }else{
            products[id].qty -= 1
        }
    }

    return factory
}]);
