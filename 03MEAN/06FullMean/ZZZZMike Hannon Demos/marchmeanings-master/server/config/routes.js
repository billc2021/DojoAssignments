var   BucketLists = require('./../controllers/bucketLists.js'),
      Users = require('./../controllers/users.js');
//************RESTful routes for users************
module.exports = function(app){
  //USERS
  app.get('/users', Users.index);
  app.get('/users/:_id', Users.show);
  app.put('/users/:_id', Users.update);
  app.post('/users', Users.create);
  //BUCKETLISTS
  app.post('/bucketLists', BucketLists.create);
  app.put('/bucketLists/:_id', BucketLists.update);
};
//************END routes for users****************
