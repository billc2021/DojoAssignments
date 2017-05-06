app.controller('indexController', ['$scope', 'sessionFactory', '$location',function($scope, sf, $loc) {

console.log('controller');
var _this = this;
this.login = function(){
  sf.login(_this.user, function(data){
    // console.log(data.error);
    if (!data.data.error){
      $loc.url('dashboard');
      console.log(data.data);
    }
    this.error = data.data.error;
    console.log(this.error);
  });
}


}]);
