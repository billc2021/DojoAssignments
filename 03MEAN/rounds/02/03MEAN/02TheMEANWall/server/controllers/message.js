var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports.index = function(req, res){
    Message.find({}, function(err, messages){
        if(err){
            console.log('Error finding friends', err);
        } else {
            res.json({ result: 'Message Index', messages: messages});
        }
    });
}

module.exports.create = function(req, res){
    var message = new Message(req.body);
    // console.log('message from create() =', message)

    message.save(function(err){
        if(err){
            console.log('Error saving friend from create()', err);
        } else {
            res.json({ result: 'Successfully Created Item', message: message});
        }
    });
}

module.exports.show = function(req, res){
    Message.findOne({ _id: req.params.id }, function(err, message){
        if(err){
            console.log('Error with findOne for show()', err);
        } else {
            res.json({ result: 'Message ' + message._id, message: message });
        }
    });
}