console.log('/server/controllers/friends.js');

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports.index = function(req, res){
    Friend.find({}, function(err, friends){
        if(err){
            console.log('Error finding friends', err);
        } else {
            res.json({ message: 'Friends Index', friends: friends });
        }
    });
}

module.exports.show = function(req, res){
    // console.log('req.params for show() in friends.js controller',req.params)
    Friend.findOne({ _id: req.params.id }, function(err, friend){
        // console.log('findOne id',req.params.id)
        if(err){
            console.log('Error with findOne()', err);
        } else {
            res.json({ message: 'Friend ' + friend._id, friend: friend });
        }
    })
}

module.exports.create = function(req, res){
    var friend = new Friend({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birthday: req.body.birthday
    });
    friend.save(function(err){
        if(err){
            console.log('Error saving friend', err);
        } else {
            res.json({ message: 'Successfully created friend', friend: friend });
        }
    });
}

module.exports.edit = function(req, res){
    Friend.findById(req.params.id, function(err, friend){
        if(err){
            console.log('Error finding friend for edit',err)
        } else {
            res.json({ friend: friend })
        }
    })
}

module.exports.update = function(req, res){
    // var Friend = require('../models/friend');
    // console.log('req.params.id', req.params.id)
    // res.send(req.params.id)
    Friend.findById(req.params.id, function(err, friend){
        // console.log('friend is',friend)
        if(err){
            console.log('Error finding Friend to update', err);
        } else {
            friend.first_name = req.body.first_name || friend.first_name;
            friend.last_name = req.body.last_name || friend.last_name;
            friend.birthday = req.body.birthday || friend.birthday;

            friend.save(function(err, friend){
                if(err){
                    console.log('Error saving friend on update', err);
                } else {
                    res.json({ message: 'Successfully updated friend', friend: friend })
                }
            });
        }
    });
}

module.exports.delete = function(req, res){
    // console.log('delete req.params.id', req.params.id)
    Friend.findByIdAndRemove(req.params.id, function(err, friend){
        if(err) {
            console.log('Error finding friend to delete', err);
        } else {
            res.json({ message: 'Successfully deleted friend', friend: friend });
        }
    });
}