Item = require('../controllers/server.controller') 

module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(__dirname + '../../client/index.html');
    })

    // SHOW all items
    app.get('/items', Item.list);

    // CREATE a new item
    app.post('/items', Item.create);

    // SHOW a single item
    app.get('/items/:id', Item.show);

    // UPDATE an item
    app.put('/items/:id', Item.update);

    // DELETE an item
    app.delete('/items/:id', Item.delete);
    
}

