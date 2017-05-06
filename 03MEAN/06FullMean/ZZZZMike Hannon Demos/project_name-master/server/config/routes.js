var mongoose = require('mongoose');
var Users = require('../controllers/users.js');
var Polls = require('../controllers/polls.js');

module.exports = (function(app){
app.get('/users/:id', Users.show);
app.post('/users', Users.show_by_name);
app.post('/polls', Polls.create);
app.put('/polls/:id', Polls.update_answer);
app.delete('/polls/:id', Polls.delete);
app.get('/polls', Polls.index);
app.get('/polls/:id', Polls.show);
});
