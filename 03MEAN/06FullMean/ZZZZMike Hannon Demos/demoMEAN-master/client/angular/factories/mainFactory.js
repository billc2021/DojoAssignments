console.log('mainFactory');
/*
  Eventually have our main factory.
  make calls to our DB and store info.
*/
/* $http service
hypertexttransferprotocol
AJAX asychronous javascript and xml
asynchronous - out of the normal time path

normal http - go to a web page and get stuff back from a server.

$http  go to a web page and get stuff back from a server, except waits for us to tell it what to do with the data when it comes back.
*/
app.factory('mainFactory', ['$http', function($http) {
  var mainFactoryObject = {};
  mainFactoryObject.index = function(callbackFromController){
    callbackFromController('before http request');
    $http.get('/something').then(function(dataFromDB){
      callbackFromController(dataFromDB.data);
    });
    callbackFromController('after http request starts');
  }
  mainFactoryObject.create = function(){
    $http.post('/something', {name:'God'}).then(function(stuffFromDB){
      console.log(stuffFromDB);
      if (stuffFromDB.data.errors){
        console.log('other errros, like name too short')
        console.log(stuffFromDB.data.errors);
      }
      if (stuffFromDB.data.errmsg){
        console.log('name not unique')
        console.log(stuffFromDB.data.errmsg);
      }
      else {
        // good data
      }
    });
  }
  return mainFactoryObject;
}]);
