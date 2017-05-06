console.log('hello controller2')
var mongoose =require('mongoose'),
User =  mongoose.model('users'),
Question = mongoose.model('questions'),
Answer = mongoose.model('answers');

// var AnswerConstructor = function(req,res){
//   this.create = function(req,res){
//     var
//   }
// }
var QuestionConstructor = function(){
  var _this = this;

  this.create = function(req,res){
      for (var i = 0; i < req.body.answers.length; i++){
        req.body.answers[i] = {name:req.body.answers[i]};
      }
    var question = new Question({creator:req.body.creator._id, question:req.body.question, answers:req.body.answers});
    question.save(function(err, questions){
      if (err){
        console.log(err);
        return res.json(err);
      }
      else {
        console.log('***************');
        console.log(questions);
        console.log('****************');
        return res.json(questions);
      }
    });
  }
  this.update_answer = function(req,res){
    console.log('hello');
    console.log(req.body);
    Question.findOne({_id:req.params.id}, function(err,question){
      if (err){
        return res.json(err);
      }
      else {
        for (var i = 0; i < question.answers.length; i ++){
          if (question.answers[i]._id == req.body._id){
            question.answers[i].votes ++;
            // console.log(question);
            question.save(function(err, answer){
              if (err){
                return res.json(err);
              }
              else {
                return res.json(answer);
              }
            });
          }
        }


      }
    })
  }
  this.delete = function(req,res){
    Question.findOne({_id:req.params.id}, function(err, question){
      if (err){
        return res.json(err);
      }
      else {
        for (var i = 0; i < question.answers.length; i ++){
          Answer.findOne({_id:question.answers[i]._id}, function(err, data){
            console.log(data);
            // response.remove();
          })
        }
        question.remove(function(err,response){
          if (err){
            return res.json(err);
          }
          else{
            return res.json({success:'true'});
          }
        })
      }
    })
  }
  this.index = function(req,res){
    Question.find({}).populate('creator').populate('answers').exec(function(err, data){
      if (err){
        return res.json(err);
      }
      else {
        return res.json(data);
      }
    });
  }
  this.show = function(req,res){
    Question.findOne({_id:req.params.id}).populate('creator').populate('answers').exec(function(err, data){
      if (err){
        return res.json(err);
      }
      else {
        return res.json(data);
      }
    });

  }


}

module.exports = (function(){
  return new QuestionConstructor();
})();
