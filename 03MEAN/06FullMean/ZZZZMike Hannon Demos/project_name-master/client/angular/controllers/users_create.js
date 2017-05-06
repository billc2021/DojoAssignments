app.controller('userCreateController', ['$scope', 'usersFactory', function($scope, uf) {
var _this = this;
this.create = function(){
  uf.login(_this.user, function(data){console.log(data)});
}
}]);
