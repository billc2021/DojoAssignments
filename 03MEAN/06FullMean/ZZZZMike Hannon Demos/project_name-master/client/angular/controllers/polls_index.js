app.controller('pollsIndexController', ['$scope', 'usersFactory', 'pollsFactory', '$location', function($scope, uf, pf, loc) {

var _this = this;
this.polls = []; // get something from the factory

uf.get(function(data){
  _this.user = data;
  if (!_this.user.name){
    loc.url('/');
  }
});
pf.index(function(data){
  _this.polls = data;
});


this.logout = function(){
  uf.logout();
}

this.delete = function(data){
  pf.delete(data, function(data){
    _this.polls = data;
  });
}
}]);
