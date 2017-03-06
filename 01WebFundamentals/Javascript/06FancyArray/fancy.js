var arr = ["James", "Jill", "Jane", "Jack"];

function fancy(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(i + " -> " + arr[i]);
    }
}

function fancy(arr, symbol){
    for(var i = 0; i < arr.length; i++){
        console.log(i + " " + symbol + " " + arr[i]);
    }
}

function fancy(arr, symbol, reversed){
    for(var i = 0; i < arr.length; i++){
        if(reversed){
            arr = arr.reverse();
            console.log(i + " " + symbol + " " + arr[i]);
        }else {
            console.log(i + " " + symbol + " " + arr[i]);
        }
    }
}


console.log(fancy(arr, "==>", "reversed"));