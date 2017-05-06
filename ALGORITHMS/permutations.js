/*
    permutations (str: string, sub: string): string[]
*/
function permutations (str, sub="")
{
    if (str.length === 0) {
        // Finished Permutations
        return [sub];
    }

    var output = [];
    for (var i = 0; i < str.length; i++) {
        // Slice char from str and add it to the end of sub
        var sliced = str.slice(0, i) + str.slice(i+1, str.length);
        var newSub = sub + str[i];

        // Recurse on each char of string, add output to list
        output = output.concat(permutations(sliced, newSub));
    }
    return output;
}

console.log(permutations("cat"));