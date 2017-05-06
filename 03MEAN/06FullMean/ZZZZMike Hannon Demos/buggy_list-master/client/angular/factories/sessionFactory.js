app.factory('sessionFactory', ['$http', function($http) {
  var session_factory = {};
  var logged_in = {};
  session_factory.login = function(data, callback){
    $http.post('/login', data).then(function(data){
      logged_in = data.data;
      callback(data);
    }, function(data){
      console.log(data);
    });
  }
  session_factory.logout = function(){
    logged_in = {};
  }
  session_factory.getUser = function(){
    return logged_in;
  }
  session_factory.setUser = function(data){
    logged_in = data;
  }
  return session_factory;
}]);
