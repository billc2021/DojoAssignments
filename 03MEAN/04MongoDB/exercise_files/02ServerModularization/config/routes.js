var dojoController = require('./../controllers/dojos.js')
var usersController = require('./../controllers/users.js')


module.exports = function(app){
    app.get('/', function(req, res){
        res.json({key: 'value'});
    })
    app.get('/users', usersController.index);
    app.post('/users', usersController.create);
    app.get('/dojos', dojoController.index);
    app.get('/dojos/:id', dojoController.show);
    app.post('/dojos', dojoController.create);
}