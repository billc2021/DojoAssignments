/*
    Handle Incoming Requests for SubItems
*/
console.log("/server/controllers/sub-items.js");

var mongoose = require("mongoose");
var Item = mongoose.model("Item");
var SubItem = mongoose.model("SubItem");

module.exports.create = function (request, response)
{
    Item.findById(request.params.itemId, function (err, item) {
        var subItem = new SubItem({
            content: request.body.content,
        });
        item.subItems.push(subItem);
        subItem.save(function (err) {
            if (err) {
                console.log(err);
                return;
            }
            item.save(function (err) {
                if (err) {
                    console.log(err);
                    return;
                }
                response.json({ message: "Successfully Created SubItem!", subItem: subItem });
            });
        });
    });
}

