function flatten2Deep (arr) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            var subArray = arr[i];
            for (var j = 0; j < subArray.length; j++) {
                output.push(subArray[j]);
            }
        } else {
            output.push(arr[i]);
        }
    }
    return output;
}


function flatten (arr) {
    var output = [];
    // Loop Through Array
    for (var i = 0; i < arr.length; i++) {
        // If Element is SubArray ...
        if (arr[i] instanceof Array) {
            // Recurse on SubArray and Append Result to Main Array
            var flattened = flatten(arr[i]);
            for (var j = 0; j < flattened.length; j++) {
                output.push(flattened[j]);
            }
        } else {
            // Push Element to Array
            output.push(arr[i]);
        }
    }
    return output;
}

function flatten2 (arr, index, output) {
    if (arr.length === index) {
        // End of Array
        return output;
    }
    if (arr[index] instanceof Array) {
        // Recurse On Sub Array
        flatten2(arr[index], 0, output);
    } else {
        // Add Element
        output.push(arr[index]);
    }
    // Recurse On Main Array
    return flatten2(arr, index+1, output);
}

var flattened = flatten([1, [2, [3, [4, [5, [6]]]]]], 0, []);
console.log(flattened);