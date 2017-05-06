// console.log('/models/config/routes.js');

var friends = require('../controllers/friends');

module.exports = function (app) {
    app.get('/index', friends.index);
    app.post('/new', friends.create);
    app.get('/show/:id', friends.show);
    app.put('/edit/:id', friends.update);
    app.get('/edit/:id', friends.edit)
    app.delete('/delete/:id', friends.delete)

}