class VehicleConstructor{
    constructor(name, wheels, passengers, speed){
        this.distanceTraveled = 0;

        this.name = name;
        this.wheels = wheels;
        this.passengers = passengers;
        this.speed = speed;

        // var updateDistanceTravelled = function(){
        //     distanceTraveled = distanceTraveled + speed;
        //     return distanceTraveled;
        // }
        // this.makeNoise = function (){
        //     console.log("Noise made here!");
        // }
        // this.move = function(){
        //     this.makeNoise();
        //     console.log(updateDistanceTravelled()); 
        // }
        // this.checkMiles = function(){
        //     return updateDistanceTravelled();
        // }
    }
}
VehicleConstructor.prototype.updateDistanceTravelled = function(){
    this.distanceTraveled = this.distanceTraveled + this.speed;
    return this;
}
VehicleConstructor.prototype.checkMiles = function(){
    this.updateDistanceTravelled();
    return this;
}
VehicleConstructor.prototype.makeNoise = function() {
    console.log("Noise made here!");
    return this;
}
VehicleConstructor.prototype.move = function(){
    this.makeNoise();
    console.log(this.updateDistanceTravelled()); 
    return this;
}
VehicleConstructor.prototype.generateVin = function(){
    this.vin =  Math.floor(Math.random() * 1000 + 1);
    return this.vin;
}

// var Bike = new VehicleConstructor("tony", 2, 4, 5);
// Bike.makeNoise = function() {
//     console.log("ring ring!")
// }
// Bike.move();

// var Sedan = new VehicleConstructor("betty", 4, 8, 15);
// Sedan.makeNoise = function() {
//     console.log("Honk Honk!");
// }
// Sedan.makeNoise();

var Bus = new VehicleConstructor("fred", 4, 10, 50);
Bus.pickUp = function(passengers, new_passengers) {
    passenger_count = new_passengers + passengers
    return passenger_count
}
console.log(Bus.pickUp(10, 15));
Bus.move().checkMiles();

console.log(Bus.vin);