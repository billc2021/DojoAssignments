/*
    Handle Incoming Requests for SubItems
*/
console.log("/server/controllers/sub-items.js");

var mongoose = require("mongoose");
var Item = mongoose.model("Item");
var SubItem = mongoose.model("SubItem");

module.exports.create = function (request, response)
{
    var subItem = new SubItem({
        content: request.body.content,
    });
    Item.findById(request.params.itemId, function (err, item) {
        item.subItems.push(subItem);
        item.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                response.json({ message: "Successfully Created Item!", item: item });
            }
        });
    })
}
