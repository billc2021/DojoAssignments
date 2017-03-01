function printRange(start, stop, skip)
{   
    for(var i = start; i < stop; i = i + skip)
    {
        console.log(i);
    }
}

printRange(2, 10, 2);