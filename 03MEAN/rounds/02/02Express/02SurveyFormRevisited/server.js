express = require('express')
bodyParser = require('body-parser')
path = require('path')

app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/static')))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('index')
})

app.post('/result', function(req, res){
    res.render('result', {info: req.body})
})

server = app.listen(8000, function(){
    console.log('Runnin on port 8000')
})

io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket){
	 	socket.on("posting_form", function (data){
	 		var random_number = Math.floor((Math.random() * 1000) + 1);
		  	socket.emit('updated_message', {response: data}); 
			socket.emit('random_number', {response: random_number}); 
		})
	})