function sumIntegers(x, y){
    var sum = 0
    for (var i = x; i <= y; i++){
        sum = sum + i;
    }
    console.log(sum);
}

var sumInts = function(x, y){
    var sum = 0
    for (var i = x; i <= y; i++){
        sum = sum + i;
    }
    console.log(sum);
}

var object = { 
    sumIntFunc: function(x, y){
    var sum = 0
    for (var i = x; i <= y; i++){
        sum = sum + i;
    }
    console.log(sum);
    }
}

//////////////////////////////////
//////////////////////////////////
function sumArray(array){
    var min = array[0];
    for(var i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i]
        }
    }
    return min;
}

var sumArr = function(array){
    var min = array[0];
    for(var i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i]
        }
    }
    return min;
}

var object = {
    sumArrFunc: function(array){
    var min = array[0];
    for(var i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i]
        }
    }
    return min;
    }
}

//////////////////////////////////
//////////////////////////////////
function avgArray(array){
    var sum = 0, count = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i]
        count++
    }
    return sum / count
}

var avgArr = function(array){
    var sum = 0, count = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i]
        count++
    }
    return sum / count
}

var object = {
    function(array){
    var sum = 0, count = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i]
        count++
    }
    return sum / count
    }
}

//////////////////////////////////
//////////////////////////////////
person = {
    name: "bill",
    distance_traveled: 0,
    say_name: function(person){alert(person['name']);},
    say_something: function(input){alert(person['name'] + " says: \"" + input +"!\"")},
    walk: function(){
        alert(person['name'] + " is walking") 
        return person['distance_traveled'] = person['distance_traveled'] + 3;},
    run: function(){alert(person['name'] + " is running");
        return person['distance_traveled'] = person['distance_traveled'] + 10},
    crawl: function crawl(){alert(person['name'] + " is crawling");
        return person['distance_traveled'] = person['distance_traveled'] + 1}
}

console.log(person.say_name(person));
person.say_something("say soething to return");
console.log(person.walk());
console.log(person.run());
console.log(person.crawl());