function personConstructor(input){
    person = {
        name: input,
        distance_traveled: 0,
        say_name: function(person){alert(person['name']);},
        say_something: function(input){alert(person['name'] + " says: \"" + input +"!\"")},
        walk: function(){
            alert(person['name'] + " is walking") 
            return person['distance_traveled'] = person['distance_traveled'] + 3;},
        run: function(){alert(person['name'] + " is running");
            return person['distance_traveled'] = person['distance_traveled'] + 10},
        crawl: function(){alert(person['name'] + " is crawling");
            return person['distance_traveled'] = person['distance_traveled'] + 1}
    }
}
personConstructor("Jay");
console.log(person.say_name(person));
person.say_something("say soething to return");
console.log(person.walk());
console.log(person.run());
console.log(person.crawl());

//////////////////////////////////////////
//////////////////////////////////////////
function ninjaConstructor(name, cohort){
    ninja = {name: name,cohort: cohort,belt: "yellow",

        levelUp: function(){
            if (ninja['belt'] == "yellow"){
                ninja['belt'] = "green";
            } else if (ninja['belt'] == "green"){
                ninja['belt'] = "brown";
            }else if (ninja['belt'] == "brown"){
                ninja['belt'] = "black";
            }
        }
    };
}
ninjaConstructor("betty", "skunks");
console.log(ninja['name']);
console.log(ninja['cohort']);
console.log(ninja['belt']);
console.log(ninja.levelUp());
console.log(ninja['belt']);
console.log(ninja.levelUp());
console.log(ninja['belt']);
console.log(ninja.levelUp());