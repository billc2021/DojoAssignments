var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './views')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.post('/quotes', function(req, res){
    // console.log('the req is ',req.body);
    name = req.body.name;
    quote = req.body.quote;
    // console.log('req.qoute from body', quote)
    var quotes = new Quotes({name: name, quote: quote});
    // console.log('quotes = ', quotes)
    quotes.save(function(err){
        if(err){
            res.render('index', {title: 'You have errors!', errors: quotes.errors})
        } else {
            res.redirect('/quotes');
        }
    })
    res.redirect('/quotes');
})

app.get('/quotes', function(req, res){
    // Quotes.find({}, function(err, quotes){
    //     res.render('quotes', {quotes: quotes})
    // })
    Quotes.find({}).sort('-createdAt').exec(function(err, quotes){
        res.render('quotes', {quotes: quotes})
    })
})
mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    quote: {type: String, required: true, minlength: 1}
}, {timestamps: true });
mongoose.model('Quotes', QuoteSchema); 
var Quotes = mongoose.model('Quotes') 



app.listen(8000, function(){
    console.log('Running on port 8000');
})