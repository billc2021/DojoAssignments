/*
    Main Server File
*/
console.log("/server.js");
var express = require("express");
var app = express();

require("./server/config/database");
require("./server/config/routes")(app);

app.listen(3000, function () {
    console.log("Listening on Port 3000");
});