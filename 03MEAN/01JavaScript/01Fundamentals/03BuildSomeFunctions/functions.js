function runningLogger(){
    console.log('I am running!');
}
runningLogger();

function multiplyByTen(num){
    total = num * 10;
    return total;
}
console.log(multiplyByTen(5));

function stringReturnOne(){
    return "A hard-coded string";
}
console.log(stringReturnOne());

function stringReturnTwo(){
    return "Another hard-codded string";
}
console.log(stringReturnTwo());

function caller(input){
    if (typeof(input) == "function"){
        input
    }
}
console.log(caller(runningLogger()));

function myDoubleConsoleLog(input1, input2){
    if(typeof(input1) == "function" && typeof(input2) == "function"){
        console.log(input1());
        console.log(input2());
    }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

function caller2(input){
    if(typeof(input) == "function"){
        console.log('starting...');
        setTimeout(input, 2000);
        console.log('...ending');
    }
    return ('interesting');
}
console.log(caller2(myDoubleConsoleLog));