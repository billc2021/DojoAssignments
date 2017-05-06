express = require('express')
app = express()

app.use(express.static(__dirname + '/static'))

app.set('views', __dirname + '/static/views')
app.set('view engine', 'ejs')

app.get('/', function(request, response){
    response.send('<h1>This is from Server.js</h1>')
})

app.get('/users', function(request, response){
    var user_array = [
        {name: 'Micheal', email: 'micheal@codingdojo.com'},
        {name: 'Jay', email: 'jay@codingdojo.com'},
        {name: 'Brendan', email: 'brendan@codingdojo.com'},
        {name: 'Andrew', email: 'andrew@codingdojo.com'}
    ]
    response.render('users', {users: user_array})
})

app.listen(8000, function(){
    console.log('Running on port 8000')
})