const X ="█";
const _ = "_";

function fill (grid, x, y)
{
    if (x < 0 || x > grid.length || y < 0 || y > grid.length) {
        // Out Of Bounds
        return grid;
    }
    if (grid[y][x] === X) {
        // Already Filled
        return grid;
    }

    // Fill
    grid[y][x] = X;

    // Recurse In All Directions
    fill(grid, x-1, y);
    fill(grid, x+1, y);
    fill(grid, x, y-1);
    fill(grid, x, y+1);
    return grid;
}

const grid = [
    [_,_,X,_,X,_],
    [_,_,X,_,X,_],
    [_,_,_,X,X,_],
    [_,_,X,_,_,_],
    [_,X,_,X,_,_],
    [X,_,_,_,X,_]
];
printGrid(grid);
console.log(1, 1);
printGrid(fill(grid, 1, 1));

function printGrid (grid) {
    var output = "";
    grid.forEach((row) => {
        output += row.join('  ') + '\n';
    });
    console.log(output);
}