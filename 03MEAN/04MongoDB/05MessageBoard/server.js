var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './views')))
app.use(express.static(path.join(__dirname, './static')))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


/////////////////////
// INDEX - Get
/////////////////////
app.get('/', function(req, res){
    Message.find({}, function(err, results){
        if(err){
            console.log('================================');
            console.log('ERROR - Index Start');
            console.log('================================');
            console.log('Error with Index ', err);
            console.log('================================');
            console.log('ERROR - Index End');
            console.log('================================');
        }
    res.render('index', {messages: results});
    });
});

/////////////////////
// COMMENTS - Get
/////////////////////
app.get('/message/:id', function (req, res){
// the populate method is what grabs all of the comments using their IDs stored in the 
// comment property array of the post document!
 Message.findOne({_id: req.params.id})
 .populate('comments')
 .exec(function(err, comment) {
      res.render('comment', {comments: comment});
        });
});

/////////////////////
// MESSAGE - Post
/////////////////////
app.post('/message', function(req, res){
    // console.log('Req.body is ',req.body)
    Message.create(req.body, function(err, results){
        if(err){
            console.log('================================')
            console.log('ERROR - MESSAGE - POST Start')
            console.log('================================')
            console.log('Error with MESSAGE - POST ', err)
            console.log('================================')
            console.log('ERROR - MESSAGE - POST End')
            console.log('================================')
        }
    })
    res.redirect('/')
})
/////////////////////
// COMMENT - Post
/////////////////////
app.post('/comment/:id', function (req, res){
    console.log('comment post data ', req.body)
    console.log('message_id ', req.params.id)
Message.findOne({_id: req.params.id}, function(err, message){
    // data from form on the front end
    var comment = new Comment(req.body);
    //  set the reference like this:
    comment._message = message._id;
    // now save both to the DB
    comment.save(function(err){
            message.comments.push(comment);
            message.save(function(err){
                    if(err) {
                        console.log('================================')
                        console.log('ERROR - COMMENT - POST Start')
                        console.log('================================')
                        console.log('Error with COMMENT - POST ', err)
                        console.log('================================')
                        console.log('ERROR - COMMENT - POST End')
                        console.log('================================')
                    } else {
                        res.redirect('/');
                    }
                });
        });
    });
});

mongoose.connect('mongodb://localhost/message_board');
var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'comment'}]
}, {timestamps: true});

var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    text: {type: String, required: true}
}, {timestamps: true});

var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);





app.listen(8000, function(){
    console.log('Running on port 8000');
})