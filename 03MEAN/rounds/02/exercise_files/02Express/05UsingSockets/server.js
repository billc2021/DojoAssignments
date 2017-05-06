express = require('express')
path = require('path')

app = express()

app.use(express.static(path.join(__dirname, './static')))

app.set('views', path.join(__dirname, './static/views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('index')
})

server = app.listen(8000, function(){
    console.log('Running on port 8000')
})

io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){
    // console.log('We are using sockets!')
    // console.log(socket.id)

    socket.on('button_clicked', function(data){
        console.log('Someone clicked a button! Reason: ' + data.reason)
        socket.emit('server_response', {response: 'Sockets are the best!'})
    })
})

