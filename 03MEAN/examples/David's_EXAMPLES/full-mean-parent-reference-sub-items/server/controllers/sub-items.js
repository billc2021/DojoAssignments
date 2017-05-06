/*
    Handle Incoming Requests for SubItems
*/
console.log("/server/controllers/sub-items.js");

var mongoose = require("mongoose");
var Item = mongoose.model("Item");
var SubItem = mongoose.model("SubItem");

module.exports.index = function (request, response)
{
    SubItem.find({ _parent: request.params.itemId }, function (err, subItems) {
        if (err) {
            console.log(err);
        } else {
            response.json({ message: "SubItems Index for Item " + request.params.itemId, subItems: subItems });
        }
    });
};

module.exports.create = function (request, response)
{
    var subItem = new SubItem({
        content: request.body.content,
        _parent: request.params.itemId
    });
    subItem.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            response.json({ message: "Successfully Created SubItem!", subItem: subItem });
        }
    });
}

