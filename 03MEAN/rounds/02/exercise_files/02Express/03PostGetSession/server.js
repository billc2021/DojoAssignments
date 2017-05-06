express = require('express')
bodyParser = require('body-parser')
app = express()

app.use(express.static(__dirname, + '/static'))
app.use(bodyParser.urlencoded({extended: true}))

app.set('views', __dirname + '/static/views')
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('index', {title: 'my EXPRESS project'})
})

app.get('/users', function(req, res){
    console.log('Users route was hit using GET')
    res.render('users')
})

app.post('/users', function(req, res){
    console.log('POST DATA \n\n', req.body)
    res.redirect('/')
})

app.get('/users/:id', function(req, res){
    console.log('REQ.PARAMS', req.params)
    res.send('You requested thhe user with id: ' + req.params.id)
})

app.get('/users/:id/user/:task', function(req, res){
    console.log('REQ.PARAMS', req.params)
    res.send('You requested thhe user with id: ' + req.params.id)
})

app.listen(8000, function(){
    console.log('Running on port 8000')
})