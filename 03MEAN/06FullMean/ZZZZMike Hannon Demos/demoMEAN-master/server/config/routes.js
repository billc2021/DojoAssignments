console.log('routes');
/*
Catch http requests made by our angular Factory, or typed into our browser header( as a get).
Require a controller file
Overall what does it do??
-- run a function that links our routes to our server.
-- Express servers expect to have a function to run when a route is hit.
When this function runs, expect a few prebuilt arguments pushed in: request and response in that order..
  request object: header information, things like request.body (if body parser is installed) and a bunch of other info.
  response object: header information, and info as to where to send a response and what format to use.  e.g res.json, or res.send, or res.render, or res.redirect.

by default app.get('/') -- will search for expess.static locations and look for index.html, and if there is one, will run res.render('index.html') (It will load the index page for you!).
*/
var Whatever = require('./../controllers/examples.js');
// returns whatever comes after the equals sign!
module.exports = function(app){
  app.get('/something', Whatever.index);
  app.post('/something', Whatever.create);
};
