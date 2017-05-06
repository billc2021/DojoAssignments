var mongoose = require('mongoose');
var Users = require('../controllers/users');
var Bucketlists = require('../controllers/bucketlists');
module.exports = function(app){
  //************RESTful routes for users************
app.get('/users', Users.index);
app.get('/users/:id', Users.show);
// app.get('/users/:id/edit', Users.edit);
app.post('/users', Users.create);
app.put('/users/:id', Users.update);
// app.delete('/users/:id', Users.delete);
  //************END routes for users****************
  //************RESTful routes for bucketlists************
// app.get('/bucketlists', Bucketlists.index);
// app.get('/bucketlists/new', Bucketlists.new);
// app.get('/bucketlists/:id', Bucketlists.show);
// app.get('/bucketlists/:id/edit', Bucketlists.edit);
 app.post('/bucketlists', Bucketlists.create);
 app.put('/bucketlists/:id', Bucketlists.update);
// app.delete('/bucketlists/:id', Bucketlists.delete);
  //************END routes for bucketlists****************
app.post('/login', Users.login); // called from usersFactory
};
