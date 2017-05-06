console.log('examples');
/*
Logic to communicate with the models.  (Controller)
require mongoose!!
Needs a model to communicate with can be grabbed from mongoose (if it exists in mongoose);

Needs to return an object that has methods  - these methods should have function(req,res) as their starting point, because we need to call and use req and res to do respond appropriately back to our caller.
*/
var mongoose = require('mongoose');
var OurModelAccessPoint = mongoose.model('examples');
/*
  OurModelAccessPoint can use modified mongo methods -- like find({})
  remove()
  findOne
  update()
  In addition: you can use OurModelAccessPoint as a constructor.
  var donut = new OurModelAccessPoint(data);
  ... this will make a new object that fits the rules of that schema if it can...

  When OurModelAccessPoint has a mongo method run on it: has a second parameter:
  For Example"
  OurModelAccessPoint.find({}, function(err,returnedCrap){

  })
*/
module.exports =

{
  index:function(req,res){
    OurModelAccessPoint.find({}, function(err,data){
      if (err){
        res.json(err);
        return
      }
      //console.log(data[0].name); //
      // data[0].name = data[0].name;
      res.json(data);
    });
  },
  create:function(req,res){
    console.log(req.body, "I GOT HERE");
    var thingToSave = new OurModelAccessPoint(req.body);
    thingToSave.save(function(err,data){
      if (err){
        res.json(err);
        return
      }
      console.log(data);
      res.json(data);
    });
  },
  update:function(req,res){},
  delete:function(req,res){},
  show:function(req,res){},

  edit:function(req,res){
    // res.render(a form for a updating an example)
  },
  new:function(req,res){
    // res.render(a form for a new example)
  }
} // this object!!
