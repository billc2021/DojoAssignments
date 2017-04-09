var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './views')));

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');

///////////////////////////////
// INDEX - GET
///////////////////////////////
app.get('/', function(request, response){
    Mongoose.find({}, function(err, mongooses){
        if(err, function(){console.log('Error at index route:', err);})
    response.render('index', {mongooses: mongooses});
    })
})

///////////////////////////////
// NEW - GET
///////////////////////////////
app.get('/mongooses/new', function(request, response){
    response.render('new');
})

///////////////////////////////
// SHOW - GET
///////////////////////////////
app.get('/mongooses/:id', function(request, response){
    mongoose = Mongoose.find({ _id: request.params.id}, function(err, results){
        console.log('mongoose is: ', mongoose);
    response.render('mongooses');
    })
})

///////////////////////////////
// CREATE - POST
///////////////////////////////
app.post('/mongooses', function(request, response){
    var mongoose = new Mongoose({name: request.body.name, age: request.body.age, weight: request.body.weight})
    mongoose.save(function(err) {
        if(err){console.log('Error creating mongoose', err);}
    })
    response.redirect('/');
})

///////////////////////////////
// EDIT - GET
///////////////////////////////
app.get('/mongooses/edit/:id', function(request, response){
    Mongoose.find({_id: request.params.id}, function(err, results){
        response.render('edit',{mongoose: results[0]});
    })
})

///////////////////////////////
// EDIT - POST
///////////////////////////////
app.post('/mongooses/:id', function(request, response){
    Mongoose.update({_id: request.params.id}, request.body, function(err, result){
        if(err){console.log('Error edit-post',err)}
    })
    response.redirect('/')
})

///////////////////////////////
// DELETE - POST
///////////////////////////////
app.post('/mongooses/destroy/:id', function(request, response){
    Mongoose.remove({_id: request.params.id}, function(err, results){
        response.redirect('/')
    })
})

mongoose.connect('mongodb://localhost/mongoose_dashboard');

var MongooseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    weight: {type: Number, required: true}
}, {timestamps: true});

mongoose.model('Mongoose', MongooseSchema);
var Mongoose = mongoose.model('Mongoose')

app.listen(8000, function(){
    console.log('Running on port 8000');
})