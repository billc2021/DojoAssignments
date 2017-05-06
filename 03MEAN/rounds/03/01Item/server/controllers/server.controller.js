var Item = require('../models/server.model');

module.exports = {

    ////////////
    // CREATE
    ////////////
    create: function(req, res){
        Item.create(req.body, function(err){
        // console.log(req.body)
            if(err){
                res.json(err);
            } else {
                res.json(true);
            }
        })
    },

    ////////////
    // READ - Finds ALL items
    ////////////
    list: function(req, res){
        Item.find({}, function(err, result){
            if(err){
                res.json(err);
            } else {
                res.json(result);
            }
        })
    },
    ////////////
    // READ - Finds ONE item
    ////////////
    show: function(req, res){
        Item.findById(req.params.id, function(err, result){
            if(err){
                res.json(err);
            } else {
                res.json(result);
            }
        })
    },

    ////////////
    // UPDATE
    ////////////
    update: function(req, res){
        // console.log(req.body);
        Item.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, result){
            if(err){
                res.json(err);
            } else {
                res.json('result');
            }
        })
    },

    ////////////
    // DELETE
    ////////////
    delete: function(req, res){
        Item.findByIdAndRemove(req.params.id, function(err, result){
            if(err){
                res.json(err);
            } else {
                res.json(result);
            }
        })
    }
}
