app.controller('IndexCtrl', function($scope, $location, appFactory){
    // console.log('app.controller');
    $scope.message = {};
    $scope.messages = [];

    function getMessages(){
        appFactory.getMessages().then(function(response){
            // console.log('response for client.indexctrl.js getMessages()', response);
            $scope.messages = response
        })
    }

    getMessages();

    $scope.postMessage = function(){
        // console.log($scope.message);
        appFactory.postMessage($scope.message).then(function(){
            $scope.message = {};
            getMessages();
            $location.url('/')
        })
    }

    $scope.postComment = function(id, subItem){
        // console.log(subItem);
        appFactory.postComment(id, subItem).then(function(){
            getMessages();
            subItem = '';
            $location.url('/');
        });

    }
})