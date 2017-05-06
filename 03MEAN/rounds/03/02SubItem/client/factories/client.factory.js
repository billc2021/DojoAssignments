app.factory('appFactory', function($http){
    factory = {};

    factory.getMessages = function(){
        return $http.get('/items').then(function(response){
            return response.data;
        });
    }

    factory.postMessage = function(message){
        // console.log(message);
        return $http.post('items', message);
    }

    factory.postComment = function(id, comment){
        // console.log(comment);
        return $http.post('items/'+ id + '/subitems', { content: comment }).then(function(response){
            return response;
        });
    }

    return factory;
})