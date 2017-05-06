var mongoose = require('mongoose');
var BucketList = mongoose.model('bucketLists');

function bucketListConstructor(){
  this.update = function(req,res){};
  this.create = function(req,res){};
}

module.exports = new bucketListConstructor();
