// var mongoose = require( 'mongoose' ),
//     express  = require( 'express' ),
//     bp       = require('body-parser'),
//     path     = require( 'path' ),
//     root     = __dirname,
//     port     = process.env.PORT || 8000,
//     app      = express();
// app.use( express.static( path.join( root, 'client' )));
// app.use( express.static( path.join( root, 'bower_components' )));
// app.use(bp.json())
// app.listen( port, function() {
//   console.log( `server running on port ${ port }` );
// });


express = require('express')
path = require('path')
app = express()

app.use(express.static(path.join(__dirname, './client/views')))
app.use(express.static(path.join(__dirname, './client/partials')))
app.use(express.static(path.join(__dirname, './server/scripts')))

app.listen(8000, function(){
    console.log('Running on port 8000')
})
