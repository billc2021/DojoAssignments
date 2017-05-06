var mongoose = require('mongoose');
var User = mongoose.model('users');

function UserConstructor(){
  var _this = this;
  this.index = function(req,res){
    User.find({}).populate('bucketLists').exec(function(err,data){
      if (err){
        res.json(err);
        return;
      }
      res.json(data); // all of our users with their bucketLists filled
    });
  };
  this.show = function(req,res){
    User.findOne(req.params).populate('bucketLists').exec( function(err,data){
      if (err){
        res.json(err);
        return;
      }
      res.json(data); // our single user
    });
  };
  this.update = function(req,res){
    var options = {new:true};
    User.findOneAndUpdate(req.params, req.body, options,
      function(err,data){
        if (err){
          res.json(err);
          return;
        }
        res.json(data); // our single user
      });
  };
  this.showByName = function(req,res){
    User.findOne({name:req.body.name}, function(err,data){
      if (err){
        res.json(err);
        return;
      }
      res.json(data); // our single user
    });
  }
  this.create = function(req,res){
    var user = new User(req.body);
    user.save(function(err,data){
      if (err){
        if (err.errmsg){
          _this.showByName(req,res);
          return;
        }
        res.json(err);
        return;
      }
      res.json(data); // our single user
    });
  };
}

module.exports = new UserConstructor();
