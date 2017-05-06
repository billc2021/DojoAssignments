app.factory('usersFactory', ['$http','$location', function($http, $location) {
  var users = {};
  var user = {};
  users.login = function(data, callback){
    $http.post('/users', data).then(function(data){
      callback(data.data);
      if (!data.data.errors){
        user = data.data;
        $location.url('dashboard');
      }
    })
  }
  users.get = function(callback){
    console.log(user);
    callback(user);
  }
  users.logout = function(callback){
    user = {};
    $location.url('asda');
  }
  return users;
}]);
