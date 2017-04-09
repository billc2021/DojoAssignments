var _ = {
   map: function(arr, iteratee) {
     //code here;
     for (var i = 0; i < arr.length; i++){
         arr[i] *= iteratee;
     }
     return arr;
   },
   reduce: function(arr) { 
     // code here;
     var sum = 0;
     for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
     }
     return sum;
   },
   find: function(arr, val, callback) {   
     // code here;
     for (var i = 0; i < arr.length; i++){
         if (arr[i] == val){
             return val;
         }
     }
     var results = "Not in there.";
     return results;
   },
   filter: function(arr, callback) {
       // code here;
       var new_arr = []
       for (var i = 0; i < arr.length; i++){
           console.log(arr[i]);
           new_arr.push(callback(arr[i]));
           return
       }
   },
   reject: function() { 
     // code here;
   }
 }

//  console.log(_.map([1,2,3], 2));
//  console.log(_.reduce([1,2,3,4,5]));
 console.log(_.find([1,2,3,4], function(num, val=2) {return num == val}));
// console.log(_.filter([1,2,3,4], function(num) { return num % 2 == 0}));