console.log('server.controller.subItems.js');

var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var SubItem = mongoose.model('SubItem');

module.exports.create = function(req, res){
    var subItem = new SubItem({
      content: req.body.content  
    });
    Item.findById(req.params.id, function(err, item){
        item.subItems.push(subItem);
        item.save(function(err){
            if(err){
                console.log(err);
            } else {
                res.json({ message: 'Successfully Saved Item!', item: item });
            }
        });
    })
}