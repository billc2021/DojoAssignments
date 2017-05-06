console.log('friends controller');

var mongoose = require('mongoose'),
	Friends = mongoose.model('friends');
    
module.exports = {
  index: function(req,res){
    Friends.find({})
    res.json({placeholder:'index'});
  },
  create: function(req,res){
    var friend = new Friend(req.body)
    friend.save(function(err){
        if(err){
            console.log(err)
        } else{
            res.json({friend});
        }
    })
  },
  update: function(req,res){
    friend = req.friend;
    friend.firstName = req.body.firstName;
    friend.lastName = req.body.lastName;
    friend.birthDay = req.body.birthDay;

    friend.save(function(err){
        if(err){
            console.log(err)
        } else{
            res.json({friend});
        }
    })
  },
  delete: function(req,res){
    //your code here
    res.json({placeholder:'delete'});
  },
  show: function(req,res){
    Friend.findOne(req.params)
    res.json({placeholder:'show'});
  }
}