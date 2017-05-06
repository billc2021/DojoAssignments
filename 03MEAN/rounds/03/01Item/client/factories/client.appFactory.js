app.factory('appFactory', function($http){
    var factory = {};

    factory.getItems = function(){
        return $http.get('/items').then(function(response){
            // console.log(response.data);
            return response.data;
        });
    }

    factory.createItem = function(item){
        // console.log(item)
        return $http.post('items', item)
    }

    factory.getItem = function(id){
        // console.log('id from from factory.getItem', id)
        return $http.get('/items/' + id).then(function(response){
            return response.data;
        })
    }

    factory.update = function(id, item){
        // console.log(item)
        return $http.put('/items/' + id, item).then(function(response){
            // console.log('response from factory.update',response.data)
            return response.data;
        })
    }

    factory.deleteItem = function(id){
        return $http.delete('/items/' + id).then(function(response){
            return response
        })
    }

    return factory;
})