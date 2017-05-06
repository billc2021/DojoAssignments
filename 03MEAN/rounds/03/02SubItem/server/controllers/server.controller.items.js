console.log('server.controller.items.js');

var Item = require('../models/server.item');
var SubItem = require('../models/server.subItem');

module.exports = {

    /////////////////////
    // CREATE
    /////////////////////
    create: function(req, res){
        // console.log('create()')
        // res.send('create()')
        // console.log('req.body',req.body);
        Item.create(req.body, function(err, result){
            if(err){
                res.json(err);
            } else {
                res.json(result);
            }
        })
    },

    /////////////////////
    // READ - All items
    /////////////////////
    list: function(req, res){
        Item.find({}, function(err, result){
            if(err){
                res.json(err);
            } else {
                res.json(result);
            }
        })
    },

    /////////////////////
    // READ - One item
    /////////////////////
    show: function(req, res){
        Item.findById(req.params.id, function(err, result){
            if(err){
                res.json(err);
            } else {
                res.json(result);
            }
        })
    },

    /////////////////////
    // UPDATE
    /////////////////////
    update: function(req, res){
        Item.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, result){
            if(err){
                res.json(err);
            } else {
                res.json('Successfully Updated');
            }
        })
    },

    /////////////////////
    // DELETE
    /////////////////////
    delete: function(req, res){
        Item.findByIdAndRemove(req.params.id, function(err, result){
            if(err){
                res.json(err);
            } else {
                res.json({ message: 'Successfully Deleted', item: req.params.id});
            }
        })
    }
}
