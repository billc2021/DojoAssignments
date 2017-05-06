// -- its effectively a prototype
app.factory('userFactory', ['$http', function($http) {
  var users = [];
  var factory = {};
  factory.index =  function(){   // get all users from DB
    //success rather than then
    console.log('future index');
    $http.get('/users').then(function(data){ // then to run - requires a response of some sort.
      // entire header object but we want: data.data;
      users.push(data.data);
      // console.log(data.data);
    });
  }

  factory.create = function(user_info, callback){
    $http.post('/users', user_info).then(function(data){
      console.log(data.data);
    });
  }
  factory.delete = function(id, callback){
    $http.delete('/users/'+id).then(function(data){
      console.log(data.data);
    });
  }
  factory.users = users;
  console.log(this);
  return factory;
}]);
