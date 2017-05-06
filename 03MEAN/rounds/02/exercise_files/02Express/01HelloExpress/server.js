express = require('express')
app = express()

app.get('/', function(request, response){
    response.send('Hello Express!')
})

app.listen(8000, function(){
    console.log('Running on port 8000')
})
