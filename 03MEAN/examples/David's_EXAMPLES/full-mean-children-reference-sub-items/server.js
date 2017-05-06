/*
    Main Server File
*/
console.log("/server.js");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./server/config/database");
require("./server/config/routes")(app);

app.listen(3000, function () {
    console.log("Listening on Port 3000");
});