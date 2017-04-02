// if(condition_1){
//     // code
// } else if(condition_2) {
//     // code
// } else {
//     // code
// }

var x = 15;
if ( x < 10 ) {
   console.log("x is less than 10");
} else if ( x < 20 ) {
   console.log("x is less than 20");
} else {
   console.log("x is greater than 20!");
}

// Ternary operator:
// (condition) ? console.log(true) : console.log(false)
var x = 15;
(x > 20) ? console.log('it\'s greater') : console.log('it\'s less than')