function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method");
  }
  // PUBLIC
  this.getPrivateVar = function(){
      return privateVar
  }
  this.name = name;              
  this.age = age;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {   
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod(); // this works since it is a scope that can access privateMethod!
    console.log(privateVar);      // this works too!
  }
}

var Pariece = new Ninja("Pariece", 24, "TFA Teacher");
console.log(Pariece.getPrivateVar());



// try this:
Pariece.privateMethod();  
// or this:
this.privateMethod();
// or this:        
Pariece.privateVar;
// none of these work. Think about the scope of each.