var express = require('express')
var path = require('path')
app = express()

app.use(express.static(path.join(__dirname, './clients/static')))
app.use(express.static(path.join(__dirname, './clients/partials')))
app.use(express.static(path.join(__dirname, './node_modules/angular')))

app.listen(8000, function(){
    console.log('Running on port 8000')
})
