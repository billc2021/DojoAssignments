function numbersOnly(arr){
    var returnedArray = []
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] == "number"){
            returnedArray.push(arr[i]);
        }
    }
    return returnedArray
}


var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
console.log(newArray);