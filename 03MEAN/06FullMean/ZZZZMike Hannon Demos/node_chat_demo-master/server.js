var express = require('express'),
app = express(),
bodyparser = require('body-parser')
,path = require("path");

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// ejs as a view engine allows us to pass variables to a page, the .ejs helps identify it, and then all logic can be interpreted to normal html/js using <% logic %>  or <%= output %> there are other rendering engines out there!  jade/

var server = app.listen(8000)
var io = require('socket.io')(server);
app.get('/', function(req,res){
  res.render('index');
})
// server side console.log
io.our_messages = [];
io.sockets.on('connection', function(socket){
  console.log('socket generated');
  //var socket declared (because it was passed as an argument to the parameter socket on connection)
  socket.on('login',function(my_passed_data){
    //created a new key-value pair for my socket.
    socket.first_name = my_passed_data;
    console.log(my_passed_data);
    socket.emit('name', my_passed_data, io.our_messages);
    socket.broadcast.emit('new_login', my_passed_data);
    //socket.emit <-- just you (sender)
    // socket.broadcast.emit <-- everyone but you
    // io.sockets.emit <-- everyone
    socket.on('disconnect',function(){
      console.log(socket.first_name);
      socket.broadcast.emit('someone_logged_out', socket.first_name);
    } );
    socket.on('new_message',function(message){
      io.our_messages.push({name:socket.first_name, message:message});
      io.sockets.emit('publish_message',socket.first_name, message);
    });
  });

});
