app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, $routeParams) {
      /* Public Properties */
      this.controlValue = "Current Name:";
      /* Public Methods */
      this.getUser = function() {
        userFactory.show($routeParams.id, function passedToUserFactoryShow(user) {
          $scope.user = user;
        })
      }
      this.updateUser = function(){
        userFactory.update($scope.users, $routeParams.id, function passedToUserFactoryUpdate(userFromFactory){
          $scope.user = userFromFactory;
          // what is this?
          this.controlValue = "Updated Name: "
        });
      }
      /* on load time */
      this.getUser();
      console.log(this);
    }]);
    app.controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
      $scope.addUser = function(){
          userFactory.create($scope.user, function(){
          })
        console.log($scope.user);
        $location.url('/index')
      }
    }]);