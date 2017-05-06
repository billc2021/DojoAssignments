console.log('friends controller');

mongoose = require('mongoose');
Friend = mongoose.model('Friend');

module.exports = {
  index: function(req,res){
    app.get('/', function(req, res){
        res.json({placeholder:'index'});
    })
  },
  create: function(req,res){
    friend = new Friend({})
    friend.save(function(err){
        if(err){
            console.log('Error saving friend')
        }
        else {
            res.json({placeholder:'create'});
        }
    })
  },
  update: function(req,res){
    //your code here
    res.json({placeholder:'update'});
  },
  delete: function(req,res){
    //your code here
    res.json({placeholder:'delete'});
  },
  show: function(req,res){
    Friend.find({})
    res.json({placeholder:'show'});
  }
}