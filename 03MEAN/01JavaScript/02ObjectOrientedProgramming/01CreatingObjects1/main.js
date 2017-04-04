function VehicleConstructor(name, wheels, passengers){
    var vehicle = {};

    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;

    vehicle.makeNoise = function (){
        console.log("Noise made here!");
    }
    return vehicle;
}

var Bike = VehicleConstructor("tony", 2, 4);
Bike.makeNoise = function() {
    console.log("ring ring!")
}
Bike.makeNoise();

var Sedan = VehicleConstructor("betty", 4, 8);
Sedan.makeNoise = function() {
    console.log("Honk Honk!");
}
Sedan.makeNoise();

var Bus = VehicleConstructor("fred", 4, 10);
Bus.pickUp = function(passengers, new_passengers) {
    passenger_count = new_passengers + passengers
    return passenger_count
}
console.log(Bus.pickUp(10, 15));
