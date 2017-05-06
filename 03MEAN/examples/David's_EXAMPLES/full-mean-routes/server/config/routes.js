/*
    Route Request to Appropriate Contoller
*/
console.log("/server/config/routes.js");
require("../controllers/items");  // Require Items Controller

module.exports = function (app)
{
    app.get("/api/items", function () { console.log("items index"); })
    app.post("/api/items", function () { console.log("items create"); })
}
