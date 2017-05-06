//What do I need to do for a database???
// Name of DB
// Data organization
//  a) Tables, Datatype restrictions, validation?
// Data for each Tables
// create methods
// retrieve methods
// update methods
// destroy methods
// Relationships

// Day 1: our basic database


function Echidna(name){
  // constructs the name of our overall database;
  this.name = name;
  // multiple tables will go into this.
  // option 1: this is fine
  this.tables = {};
    // NEW AS OF DAY2
  this.results;

  // our table constructor
  this.createTable = function(name, schema){
    if (!schema){
      schema = {};
    }
    // option 1:
    //creates a new key with keyname of name
    this.tables[name] = new EchidnaTable(name,schema)
    // this.tables.push(new EchidnaTable(name,schema));
  }
  this.createTableData = function(name, data){
    console.log(this.tables[name], "friends?");
    this.tables[name].create(data);
    return this;
  }
  // NEW AS OF DAY2
  this.findTableData = function(name, key, value){
    this.results = this.tables[name].findData(key,value);
    return this;
  }


  // write a new function that adds data to our table by name!

}
// a class that will be used by the overall database to create specific tables
function EchidnaTable(name, schema){
  this.name = name;
  this.schema = schema;
  // maybe this should be an object?
  this.data = [];
  // left data as an array... maybe make it a (multi?) heap though--future impl
  //moved create in the table, since this method is for the table!
  this.create = function(data){
    console.log("in create")
    var hash = "";
    // make an id for each which will only rarely be duplicated (a hash key).
    for (var i = 0; i < 14; i ++){
      hash += Math.floor(Math.random()*10);
    }
    // uses that hash
    data._id = hash;
    this.data.push(data);
    console.log(this);
    return this;
  }

  // there are a few things wrong here! get it to work!
    // NEW AS OF DAY2
  this.findData = function(skey, svalue){
    var return_array =[ ];
    data.forEach(function(tvalue, tkey){
      // console.log(tvalue, "tvalue", skey);
      // console.log(tvalue[skey]);
      if (tvalue[skey] == svalue){
        return_array.push(tvalue);
      }
    });

  }
}


var myDB = new Echidna("First_DB");

myDB.createTable('friends');

// MAKE THIS WORK!
myDB.createTableData('friends',{name:"Charlie",occupation:"Bootcamp Leader"});
// console.log(myDB);
// console.log(myDB.tables['friends'].data);

myDB.findTableData('friends', "name", "Charlie");
// expect a return of [{_id: 12312531515, name:"Charlie",occupation:"Bootcamp Leader"}] or something similar - get it to work!
// where myDB now has a table of friends with a record of {name:"Charlie",occupation:"Bootcamp Leader"}.
