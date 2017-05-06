var mongoose = require('mongoose');
var BucketList = mongoose.model('bucketlists');

var catch_errors = function(res,err){
  res.json({error:err});
}


function BucketObj(){
  this.create = function(req,res){
    req.body.completed = false;
    // req.body._creator
    var bucketList = new BucketList(req.body);
    console.log(bucketList);
    bucketList.save(function (err, bucket_list) {
      if (err) {
        catch_errors(res,err);
        return;}
      res.json(bucket_list);
    });
  }
  this.update = function(req,res){
    BucketList.findOne({_id:req.params.id}, function (err, data) {
      if (err) {
        catch_errors(res,err);
        return;
      }
      console.log(data.completed);
      data.completed = !data.completed;
      console.log(data.completed);
        //set data properties based on req.body
        // runs save validations
        data.save(function (err, bucketList) {
            if (err) {
              res.json (err);
              return;
            }
            res.json(bucketList);
            return;
          });
      // res.json(data);
    });
  }

}
//model_name =  mongoose.model(appropriate model);

module.exports = (function() {
return new BucketObj();
})();
