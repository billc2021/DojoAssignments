express = require('express')
path = require('path')

app = express()

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('index')
})

server = app.listen(8000, function(){
    console.log('Runnon on port 8000')
})

io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){
    console.log('Connected')
    count = 0
    socket.on('addOne', function(data){
        console.log(count += 1)
        io.emit('addOne', {count: count})
    })

    socket.on('reset', function(data){
        count = 0
        console.log(count)
        io.emit('reset', {count: count})
    })
})