var mongoose =require('mongoose'),
User =  mongoose.model('users');
Bucketlist = mongoose.model('bucketlists');
var catch_errors = function(res, err){
  if (res){
  res.json({error:err});
  }
}

function UserObj(){
  var _this = this;
  this.login = function(req,res){
    res.locals.name = function(data){
      console.log(data, 'DATA');
      if (!data){
        _this.create(req,res);
      }
      else {
        res.json(data);
      }
    }
    _this.showByVar(req,res);
  };

  this.create = function(req,res){
    var user = new User(req.body);
    user.save(function (err, User) {
      if (err) {
        console.log('Error')
        catch_errors(res,err);
        return;}
      res.json(User);
    });

  };
  this.show = function(req,res){
    var Users = User.findOne({_id:req.params.id})
    .populate({ //allows population of bucketlists and then _creator(from each bucketlist)
    path: 'bucketlists',
    populate: { path: '_creator' }
    })
  .exec(function (err, data) {
        if (err) {
          catch_errors(res,err);
          return;
        }
        console.log(data);
        res.json(data);
      });
  };
  this.index = function(req,res){
    var Users = User.find({}).populate({
    path: 'bucketlists',
    populate: { path: '_creator' }
  }).exec(function (err, data) {
        if (err) {
        catch_errors(res,err);
          return;
          }
          console.log(data);
      });
  };
  this.showByVar = function(req,res){
    console.log("hello");
    var Users = User.findOne({name:req.body.name}).populate({
    path: 'bucketlists',
    populate: { path: '_creator' }}).exec(function (err, data) {
        if (err) {
          catch_errors(res, err);
          return;
        }
        res.locals.name(data);
      });
  };
  this.update = function(req,res){
    console.log(req.body);
    User.findOne({_id:req.params.id}, function(err, data){
      console.log(" +++++++ " + req.body._id + "++++++++++++" );
      data.bucketlists.push(req.body._id);
      data.save(function(err,data){
        res.json(data);
      });
    })

  }
}

module.exports = (function() {
return new UserObj(); // an object
})();
