app.controller('dashboard', ['$scope', 'sessionFactory', 'userFactory', 'bucketFactory', '$location', function($scope, sf, uf, bf, loc) {
  var _this = this;
  this.user = sf.getUser();
  console.log(this.user);
  if (Object.keys(this.user).length == 0){
    loc.url('/');
  }
  // Object.keys({}).length

  this.index = function(){uf.index(function(data){
      _this.users = data;
      console.log(_this.users);
    });
  }
  this.index();
  this.usersshow= function(){uf.show(_this.user, function(data){
    console.log(data);
    _this.user = data;
    sf.setUser = _this.user;
    });
  }
  this.usersshow();
  this.submit_list = function(){
    bf.create(_this.bucketlist, _this.user, function(){
      _this.usersshow();
      _this.bucketlist = {};
    });
  }
  this.update_bucket = function(data){
    bf.update(data, this.usersshow);
  }

}]);
