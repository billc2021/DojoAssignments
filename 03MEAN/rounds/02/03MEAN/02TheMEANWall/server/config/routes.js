var message = require('../controllers/message');

module.exports = function(app){
    app.get('/index', message.index);
    app.post('/create', message.create);
    app.get('/show/:id', message.show);
    // app.put('/edit/:id', message.update);
    // app.get('/edit/:id', message.edit);
    // app.delete('/delete/:id', message.delete);
}