var Users = {
  index : function(req,res){
    res.json({key:"value"}); // go to db and get all users
  },
  create : function(req,res){
    console.log(req.body); // go to db and create user
    res.json({random:'stuff'});
  },
  delete : function(req,res){
    console.log(req.params); // go to db and delete user
    res.json({random:'stuff'});
  }
}
 // normally User = a reference to a mongoose model (making it part of the mongoose controller)
 // in the mongoose model file, you'd make the schema
//************RESTful routes for users************
module.exports = function(app){
app.get('/users', Users.index); //$http.get('/users')
app.post('/users', Users.create); //$http.post('/users')
app.delete('/users/:id', Users.delete); //$http.delete('users/:id')
//************END routes for users****************
};
