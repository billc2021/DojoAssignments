app.factory('pollsFactory', ['$http', function($http) {
  var polls = {};
  // var poll_data = [];
  polls.index = function(callback){
    $http.get('/polls').then(function(data){
      callback(data.data);
    })
  }
  polls.delete = function(data,callback){
    console.log(data);
    $http.delete('/polls/'+data._id).then(function(data){
      polls.index(callback);
    });
  }
  polls.create = function(data,callback){
    console.log('hello');
    $http.post('/polls', data).then(function(data){
      console.log(data.data);
      callback(data.data);
    }, function(data){
      console.log('error');
    })
  }
  polls.show = function(data, callback){
    $http.get('/polls/'+data).then(function(data){
      callback(data.data);
    }, function(data){
      console.log('error');
    })
  }
  polls.update = function(data, data2, callback){
    $http.put('/polls/'+data._id, data2).then(function(data){
      callback();
    })
  }
  return polls;
}]);
