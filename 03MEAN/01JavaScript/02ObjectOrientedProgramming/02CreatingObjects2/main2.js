class VehicleConstructor{
    constructor(name, wheels, passengers, speed){
        var distanceTraveled = 0;

        this.name = name;
        this.wheels = wheels;
        this.passengers = passengers;
        var speed = speed;

        var updateDistanceTravelled = function(){
            distanceTraveled = distanceTraveled + speed;
            return distanceTraveled
        }
        this.makeNoise = function (){
            console.log("Noise made here!");
        }
        this.move = function(){
            this.makeNoise();
            console.log(updateDistanceTravelled()); 
        }
        this.checkMiles = function(){
            return updateDistanceTravelled();
        }
    }
}

var Bike = new VehicleConstructor("tony", 2, 4, 5);
Bike.makeNoise = function() {
    console.log("ring ring!")
}
Bike.move();

var Sedan = new VehicleConstructor("betty", 4, 8, 15);
Sedan.makeNoise = function() {
    console.log("Honk Honk!");
}
Sedan.makeNoise();

var Bus = new VehicleConstructor("fred", 4, 10, 50);
Bus.pickUp = function(passengers, new_passengers) {
    passenger_count = new_passengers + passengers
    return passenger_count
}
console.log(Bus.pickUp(10, 15));
Bus.move();
Bus.checkMiles();