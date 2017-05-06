app.controller('user', ['$scope','userFactory','sessionFactory','bucketFactory', '$routeParams', function($scope, uf,sf,bf, rp) {
  console.log(rp.id);
  var _this = this;
    this.show = function(){uf.show2(rp.id, function(data){
      console.log(data);
      _this.user = data;
    });
  }
    this.show();
  this.suser = sf.getUser();
  this.update_bucket = function(data){
    bf.update(data, this.usersshow);
  }
}]);
