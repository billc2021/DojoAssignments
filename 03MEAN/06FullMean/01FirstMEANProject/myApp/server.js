express = require('express')
path = require('path')
bodyParser = require('body-parser')
mongoose = require('mongoose')

app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, './client')))
app.use(express.static(path.join(__dirname, './client/partials')))

mongoose_connection = require('./server/config/mongoose.js')

routes_setter = require('./server/config/routes.js')(app)

app.listen(8000, function(){
    console.log('Running on port 8000')
})