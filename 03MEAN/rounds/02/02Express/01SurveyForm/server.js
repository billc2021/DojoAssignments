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
    console.log('Request data', req.body)
    res.render('result', {info: req.body})
})

app.listen(8000, function(){
    console.log('Runnin on port 8000')
})