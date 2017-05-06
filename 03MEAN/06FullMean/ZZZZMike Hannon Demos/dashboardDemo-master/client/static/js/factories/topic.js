myApp.factory('TopicFactory', function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get('/topics').success(function(data){
      if (!data.errors){
			     callback(data);
      }
		})
	}
  factory.show = function(info, callback){
    $http.get('/topics/'+info).success(function(data){
      console.log(data);
      callback(data);
    })
  }
  factory.create = function(info, callback){
    console.log(info);
		$http.post('/topics', info).success(function(data){
      if (data.errors){
        console.log (':(');
      }
      else {
        callback({_topics:data}, info._user._id);
        //data is a topic!
        //users.create(info) <-- _topics:data
        //users.create(info) <-- _posts:data
       }

		})
	}
	return factory;
})
