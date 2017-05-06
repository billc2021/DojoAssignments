app.factory('usersFactory', ['$http', function($http) {
  var uf = {};
  uf.index = function(callback){
    $http.get('/users').then(function(data){
      callback(data.data);
    });
  }
  uf.update = function(data, target, callback){
    $http.put('/users/'+target._id, data).then(function(){
      callback();
    });
  }
  uf.show = function(data, callback){
    $http.get('/users/'+data._id).then(function(data){
      callback(data.data);
    })
  }
  uf.show2 = function(data, callback){
    $http.get('/users/'+data).then(function(data){
      callback(data.data);
    })
  }
  return uf;
}]);
