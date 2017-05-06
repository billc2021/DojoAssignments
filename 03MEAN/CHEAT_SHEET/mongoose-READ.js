var Person = require("../models/person");

//////////////////////////////////////
// READ (Find)
//////////////////////////////////////


// find()
////////////////////////
// No query passed in means "find everything"
Person.find(function (err, people) {  
    if (err) {
        // Note that this error doesn't mean nothing was found,
        // it means the database had an error while searching, hence the 500 status
        res.status(500).send(err)
    } else {
        // send the list of all people
        res.send(people);
    }
});

// If query IS passed into .find(), filters by the query parameters
Person.find({"name": "John James", "age": 36}, function (err, people) {  
    if (err) {
        res.status(500).send(err)
    } else {
        // send the list of all people in database with name of "John James" and age of 36
        // Very possible this will be an array with just one Person object in it.
        res.send(people);
    }
});
////////////////////////////////////////////////

// findOne()
////////////////////////
Kitten.findOne(  
    {"color": "white", "name": "Dr. Miffles", "age": 1},  // query
    {"name": true, "owner": true},  // Only return an object with the "name" and "owner" fields. "_id" is included by default, so you'll need to remove it if you don't want it.
    function (err, kitten) {
        if (err) {
            res.send(err)
        }
        if (kitten) {  // Search could come back empty, so we should protect against sending nothing back
            res.send(kitten)
        } else {  // In case no kitten was found with the given query
            res.send("No kitten found")
        }
    }
);
////////////////////////////////////////////////

// findById()
////////////////////////
// Common RESTful way to get the Id is from the url params in req.params
Kitten.findById(req.params.kittenId, function (err, kitten) {  
    if (err) {
        res.send(err)
    }
    if (kitten) {
        res.send(kitten)
    } else {
        res.send("No kitten found with that ID")
    }
});
////////////////////////////////////////////////

// .Where(selector)
////////////////////////
Kitten.where("age").gte(1).lte(4).exec(function (err, kittens) {  
    // Do stuff
});
