app.factory('bucketFactory', ['$http', function($http) {
  var bucketFactory = {};
  bucketFactory.create = function(data, creator, callback){
    data._creator = creator._id;
    $http.post('/bucketlists', data).then(function(newdata){
      console.log(newdata);
    if (!newdata.data.errors){
      if (data['users']){
      for (var i = 0; i < data['users'].length; i ++){
          $http.put('/users/'+data['users'][i]._id, newdata.data);
          }
          $http.put('/users/'+creator._id, newdata.data).then(function(){
            callback();
          });
        }
      else{
        $http.put('/users/'+creator._id, newdata.data).then(function(){
          callback();
        });
      }
    }
    else {
      console.log('newdata');
      callback();}
    });
  }
  bucketFactory.update = function(data, callback){
    $http.put('/bucketlists/'+data).then(callback);
  }
  return bucketFactory;
}]);
