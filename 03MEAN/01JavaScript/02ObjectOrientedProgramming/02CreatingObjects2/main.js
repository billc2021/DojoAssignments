function VehicleConstructor(name, wheels, passengers){
    // var vehicle = {};

    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;

    this.makeNoise = function (){
        console.log("Noise made here!");
    }
    // return vehicle;
}

Bike = new VehicleConstructor("tony", 2, 4);
Bike.makeNoise = function() {
    console.log("ring ring!")
}
Bike.makeNoise();

Sedan = new VehicleConstructor("betty", 4, 8);
Sedan.makeNoise = function() {
    console.log("Honk Honk!");
}
Sedan.makeNoise();

Bus = new VehicleConstructor("fred", 4, 10);
Bus.pickUp = function(passengers, new_passengers) {
    passenger_count = new_passengers + passengers
    return passenger_count
}
console.log(Bus.pickUp(10, 15));
