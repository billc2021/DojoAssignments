app.controller('pollsCreateController', ['$scope', 'usersFactory', 'pollsFactory', '$location', function($scope, uf, pf,loc) {
var _this =this;
_this.user = [];
_this.answers =[];
this.create = function(){
  if (_this.poll_question){
    _this.poll_question.creator = _this.user;
    _this.poll_question.answers = _this.answers;
    pf.create(_this.poll_question, function(data){
      if (!data.errors){
        loc.url('dashboard');
      }
    });
  }
  // console.log(_this.poll_question);
}

uf.get(function(data){
  _this.user = data;
  if (!_this.user.name){
    loc.url('/');
  }
});

this.logout = function(){
  uf.logout();
}

}]);
