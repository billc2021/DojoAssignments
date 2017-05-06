var mongoose =require('mongoose'),
User =  mongoose.model('users'),
Question = mongoose.model('questions'),
Answer = mongoose.model('answers');

var UserCreator = function(){
  var _this = this;
  this.create = function(req,res){
    console.log(req.body);
    console.log('sasfasf');
    var user = new User(req.body);
    user.save(function(err,user){
      if (err){
        res.json(err);
      }
      else{
        res.json(user);
      }
    });
  };
  this.show_by_name = function(req,res){
      console.log(req.body);
    User.findOne({name:req.body.name}, function(err, user){
      if (err){
        res.json(err);
      }
      else if(!user){
        _this.create(req,res);
      }
      else{
        res.json(user);
      }
    });
  }
  this.show = function(req,res){
    User.findOne({_id:req.params.id}, function(err, user){
      if (err){
        res.json(err);
      }
      else{
        res.json(user);
      }
    });
  }
}

var catch_errors = function(err){
  res.json({error:err});
}
module.exports = (function() {
return new UserCreator();
})();
