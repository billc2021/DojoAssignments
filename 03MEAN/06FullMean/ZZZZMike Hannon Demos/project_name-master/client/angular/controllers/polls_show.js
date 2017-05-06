app.controller('showController', ['$scope', 'usersFactory', 'pollsFactory', '$routeParams','$location', function($scope, uf, pf, rp, loc) {
var _this = this;



this.polls = [];
// _this.answers = []; // get something from the factory
uf.get(function(data){
  _this.user = data;
  if (!_this.user.name){
    loc.url('/');
  }
});
pf.show(rp.id, function(data){
  _this.poll = data;
})
// get something from the factory
this.question;

this.add_count = function(data, data2){
  pf.update(data, data2, function(){
    pf.show(rp.id, function(data){
      _this.poll = data;
    });
  })
}
}]);
