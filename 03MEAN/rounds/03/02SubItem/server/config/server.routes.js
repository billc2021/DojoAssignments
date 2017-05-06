console.log('server.routes.js');

Item = require('../controllers/server.controller.items');
SubItem = require('../controllers/server.controller.subItems')

module.exports = function(app){
    // app.get('/', function(req,res){
    //     res.sendFile(__dirname + '../../client/index.html');
    // });

    // LIST all Items
    app.get('/items', Item.list);

    // // CREATE an Item
    app.post('/items', Item.create);

    // // SHOW a single Item
    app.get('/items/:id', Item.show);

    // // UPDATE an Item
    app.put('/items/:id', Item.update);

    // // DELETE an Item
    app.delete('/items/:id', Item.delete);

    // // CREATE a SubItem
    app.post('/items/:id/subitems', SubItem.create);

    // DELETE a SubItem

    // UPDATE a SubItem
}