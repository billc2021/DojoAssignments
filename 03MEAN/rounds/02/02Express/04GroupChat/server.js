express = require('express')
path = require('path')

app = express()

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('index')
})

app.listen(8000, function(){
    console.log('Running on port 8000')
})