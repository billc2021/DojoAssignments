for (var i = 0; i < 10; i++){
    console.log(i);
}

var array = [4,1,6,9,44];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);  
}

// For-In Loops
var ninja = {
  name:'Susanna',
  MEAN_belt:10,
  iOS_belt:10,
  python_belt:10,
  php_belt:9, // she hadn't mastered deploying yet!
  ruby_belt:9.75 // done in 1.5 hrs though!
}
for (var key in ninja) {
  if (ninja.hasOwnProperty(key)) {
    console.log(key);
    console.log(ninja[key]);
  }
}